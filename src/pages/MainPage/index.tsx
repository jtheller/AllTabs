import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonList,
  IonListHeader,
  IonPage,
  IonRippleEffect,
  IonText,
  IonChip,
} from "@ionic/react";
import { computed, observable } from "mobx";
import { arrayFlat, getEventRealValue, isEmpty, preventDefaultStopProp } from "../../utils/helpers";
import { env } from "../../config/env";
import "./styles.css";
import ListControlToolbar from "../../components/ListControlToolbar";
import { observer } from "mobx-react";
import { defaultFavIconUrl } from "../../config/constants";
import { UIText } from "../../client/lang";
import { getQuickSearchItems, getTabMenuItems, matchTabs } from "../../lib/common";
import { ui } from "../../client/ui";
import {
  browsersOutline,
  closeSharp,
  ellipsisVertical,
  optionsOutline,
  refreshSharp,
  volumeHighOutline,
  volumeMuteSharp,
  volumeOffOutline,
} from "ionicons/icons";
import { TabGroup } from "../../lib/types/dataTypes";
import MdIcon from "../../components/MdIcon";
import { mdiCollapseAll, mdiExpandAll } from "@mdi/js";
import { Controller } from "../../lib/controller";
import { Tooltip } from "@material-ui/core";


// TODO: When components grow to a point, part them out.
const TabItem = observer(({ tab, audible, muted, active, onClick, onMouseButton, onContextMenu, onClose, onMute, onRefresh }) => (
  <div
    key={tab.id}
    className={`flex relative ion-activatable ion-align-items-center tabItem ${active ? "active" : ""}`}
    onClick={onClick}
    onContextMenu={onContextMenu}
    onMouseDown={onMouseButton}
  >
    <img
      className="favicon"
      src={tab.favIconUrl || defaultFavIconUrl}
      alt={tab.title}
    />
    <IonText className="flex column font-xxs contentText">
      <span className="title textBold">{tab.title}</span>
      <span className="url">{tab.url}</span>
    </IonText>
    <IonButtons>
      <Tooltip title={UIText.generalClose} arrow>
        <IonButton fill="clear" onClick={onClose} title="">
          <IonIcon icon={closeSharp} />
        </IonButton>
      </Tooltip>
      <Tooltip title={UIText.generalRefresh} arrow>
        <IonButton fill="clear" onClick={onRefresh} title="">
          <IonIcon icon={refreshSharp} />
        </IonButton>
      </Tooltip>
      <Tooltip title={muted ? UIText.generalUnmute : UIText.generalMute} arrow>
        <IonButton fill="clear" onClick={onMute} title="">
          <IonIcon
            icon={
              muted
                ? volumeMuteSharp
                : audible
                ? volumeHighOutline
                : volumeOffOutline
            }
          />
        </IonButton>
      </Tooltip>
      <IonButton fill="clear" onClick={onContextMenu}>
        <IonIcon icon={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonRippleEffect />
  </div>
));

const QuickSearchPanel = observer(({ items }) => (
  <div className="flex column">
    <IonText color="primary" className="ion-padding font-xs">{UIText.quickSearch}</IonText>
    <div className="flex ion-align-items-center ion-padding-horizontal ion-padding-bottom">
      {items.map(item => <IonChip key={item.text} onClick={item.handler}>{item.text}</IonChip>)}
    </div>
  </div>
));

interface MainStore {
  showOtherWindows: boolean;
}

@observer
class MainPage extends React.Component {
  @observable windowId: number;
  @observable tabs: chrome.tabs.Tab[] = [];
  @observable windows: chrome.windows.Window[] = [];

  @observable searchValue: string = "";
  @observable selectMode: boolean = false;

  @observable loading: boolean = true;
  @observable fabOpen: boolean = false;

  controller = new Controller<MainStore>("mainPage");
  @computed get store() { return this.controller.store };

  @computed get otherTabs(): MainPage["tabs"] {
    return arrayFlat(this.windows.map(w => w.tabs));
  };
  @computed get filteredTabs(): MainPage["tabs"] {
    return this.tabs.filter(tab => matchTabs(tab, this.searchValue));
  };

  @computed get otherTabGroups(): TabGroup[] {
    return this.windows.filter(w => w.id !== this.windowId).map(window => ({
      id: window.id,
      title: this.getWindowTitle(window),
      tabs: window.tabs
    }));
  };
  @computed get filteredOtherTabGroups(): TabGroup[] {
    const matchedWindows = this.windows.filter(w => w.id !== this.windowId && w.tabs.some(t => matchTabs(t, this.searchValue)));
    return matchedWindows.map(window => ({
      id: window.id,
      title: this.getWindowTitle(window),
      tabs: window.tabs.filter(t => matchTabs(t, this.searchValue))
    }));
  };
  @computed get allTabs(): MainPage["tabs"] {
    return [].concat(this.tabs, this.otherTabs);
  };

  @computed get showOtherWindows(): boolean {
    return this.store.showOtherWindows;
  };

  constructor(props) {
    super(props);
    this.initialize();
  }

  componentWillUnmount(): void {
    this.dispose();
  }

  initialize = () => {
    if (env === "prod") {
      chrome.tabs.onUpdated.addListener(this.getTabs);
      chrome.tabs.onRemoved.addListener(this.getTabs);
      chrome.tabs.onCreated.addListener(this.getTabs);
      (window as any).onbeforeunload = () => this.dispose();
      return this.getTabs();
    }
    this.tabs = require("../../test.json");
    this.loading = false;
  };

  dispose = () => {
    chrome.tabs.onUpdated.removeListener(this.getTabs);
    chrome.tabs.onRemoved.removeListener(this.getTabs);
    chrome.tabs.onCreated.removeListener(this.getTabs);
  };

  getTabs = () => chrome.windows.getCurrent({ populate: true }, window => {
    this.windowId = window.id;
    this.tabs = window.tabs || [];
    chrome.windows.getAll({ populate: true }, windows => {
      this.windows = windows;
      this.loading = false;
    });
  });

  getWindowTitle = (window: chrome.windows.Window) => {
    if (env !== "prod") return;
    if (!window) return;
    const activeTab = window.tabs.find(t => t.active);
    return UIText.windowTitle(activeTab.title, window.tabs.length);
  };

  handleSearchChange = (event: any) => {
    preventDefaultStopProp(event);
    this.searchValue = getEventRealValue(event);
  };

  // handleSelectToggle = (event: any) => {
  //   preventDefaultStopProp(event);
  //   this.selectMode = !this.selectMode;
  //   return ui.toast({
  //     position: "top",
  //     message: UIText.comingSoon
  //   });
  // };

  handleQuickSearchMenu = (event: any) =>
    ui.popover({
      event,
      component: () => <QuickSearchPanel
        items={getQuickSearchItems().map(item => ({
          text: item,
          handler: () => {
            this.searchValue = item;
            return ui.dismissPopover()
          }
        }))}
      />,
      showBackdrop: false
    });

  handleTabClick = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    if (event.ctrlKey) {
      return chrome.tabs.create({ url: tab.url, selected: false });
    }
    if (tab.windowId) chrome.windows.update(tab.windowId, { focused: true });
    return chrome.tabs.update(id, { selected: true });
  };

  handleMouseButton = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    if (!event.button || event.button !== 1) return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    return chrome.tabs.create({ url: tab.url, selected: false });
  };

  handleWindowClick = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    const window = this.windows.find(w => w.id === id);
    if (!window) return;
    return chrome.windows.update(id, { focused: true });
  };

  handleMenu = (event: any, id: number) => {
    preventDefaultStopProp(event);
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    const menuItems = getTabMenuItems(tab);
    ui.popoverMenu({
      event,
      menuItems,
      showBackdrop: false
    });
    return false;
  };

  handleClose = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    return chrome.tabs.remove(tab.id);
  };

  handleRefresh = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    return chrome.tabs.reload(tab.id);
  };

  handleMute = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    return chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
  };

  renderTabItem = (tab: chrome.tabs.Tab) => <TabItem
    key={tab.id}
    tab={tab}
    audible={tab.audible}
    muted={tab.mutedInfo.muted}
    active={tab.active}
    onClose={e => this.handleClose(e, tab.id)}
    onRefresh={e => this.handleRefresh(e, tab.id)}
    onMute={e => this.handleMute(e, tab.id)}
    onClick={e => this.handleTabClick(e, tab.id)}
    onMouseButton={e => this.handleMouseButton(e, tab.id)}
    onContextMenu={e => this.handleMenu(e, tab.id)}
  />;

  renderTabGroup = group => <>
    <IonListHeader color="light" className="windowTitle font-xs textBold textDarkMedium" lines="full">
      <IonText>{group.title}</IonText>
      <Tooltip arrow title={UIText.goToWindow} placement="left">
        <IonButton className="noHover" fill="clear" title="" size="small" onClick={e => this.handleWindowClick(e, group.id)}>
          <IonIcon icon={browsersOutline} />
        </IonButton>
      </Tooltip>
    </IonListHeader>
    {group.tabs.map(this.renderTabItem)}
  </>;

  render() {
    return <IonPage className="mainPage">
      <IonHeader translucent>
        <ListControlToolbar
          className="searchTool"
          color="primary"
          value={this.searchValue}
          debounce={50}
          searchBarPlaceholder={UIText.searchForTabs}
          onSearchChange={this.handleSearchChange}
          onSearchIconClick={this.handleQuickSearchMenu}
        />
      </IonHeader>
      <IonContent>
        {!this.loading && (
          this.searchValue ? (
            <IonList className="ion-no-padding">
              {!isEmpty(this.filteredTabs) && <>
                <IonListHeader color="light" className="windowTitle font-xs textBold textDarkMedium" lines="full">
                  <IonText>{UIText.currentWindow}</IonText>
                </IonListHeader>
                {this.filteredTabs.map(this.renderTabItem)}
              </>}
              {!isEmpty(this.filteredOtherTabGroups) && this.filteredOtherTabGroups.map(this.renderTabGroup)}
            </IonList>
          ) : this.showOtherWindows ? (
            <IonList className="ion-no-padding">
              <IonListHeader color="light" className="windowTitle font-xs textBold textDarkMedium" lines="full">
                <IonText>{UIText.currentWindow}</IonText>
              </IonListHeader>
              {this.tabs.map(this.renderTabItem)}
              {this.otherTabGroups.map(this.renderTabGroup)}
            </IonList>
          ) : (
            <IonList className="ion-no-padding">
              {this.tabs.map(this.renderTabItem)}
            </IonList>
          )
        )}

        <IonFab
          activated={this.fabOpen}
          className="noHover"
          vertical="bottom"
          horizontal="center"
          slot="fixed"
        >
          <IonFabButton onClick={() => this.fabOpen = !this.fabOpen}>
            <IonIcon icon={optionsOutline} />
          </IonFabButton>
          <IonFabList side="top">
            <Tooltip
              arrow
              placement="right"
              title={this.showOtherWindows ? UIText.showCurrentWindows : UIText.showAllWindows}
            >
              <IonFabButton title="" onClick={() => this.store.showOtherWindows = !this.store.showOtherWindows}>
                <MdIcon icon={this.showOtherWindows ? mdiCollapseAll : mdiExpandAll} />
              </IonFabButton>
            </Tooltip>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>;
  }
}

export default MainPage;