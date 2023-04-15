import React from "react";
import {
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonList,
  IonListHeader,
  IonPage,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonText,
} from "@ionic/react";
import { computed, IObservableArray, observable, reaction, toJS, when } from "mobx";
import {
  arrayFlat,
  getEventRealValue,
  isEmpty,
  isNonZeroFalse,
  preventDefaultStopProp,
  safeParseJSON,
} from "../../utils/helpers";
import { env } from "../../config/env";
import "./styles.css";
import ListControlToolbar from "../../components/ListControlToolbar";
import { observer } from "mobx-react";
import { defaultFavIconUrl } from "../../config/constants";
import { UIText } from "../../client/lang";
import { dirSort, getQuickSearchItems, getTabMenuItems, matchTabs } from "../../lib/common";
import { ui } from "../../client/ui";
import {
  archiveOutline,
  browsersOutline,
  closeSharp,
  ellipsisVertical,
  openOutline,
  optionsOutline,
  refreshSharp,
  volumeHighOutline,
  volumeMuteSharp,
  volumeOffOutline,
} from "ionicons/icons";
import { TabGroup } from "../../lib/types/dataTypes";
import MdIcon from "../../components/MdIcon";
import {
  mdiApplicationExport,
  mdiApplicationImport,
  mdiArchive,
  mdiArrowCollapseDown,
  mdiArrowCollapseUp,
  mdiCollapseAll,
  mdiExpandAll,
  mdiWeb,
} from "@mdi/js";
import { Controller } from "../../lib/controller";
import { Tooltip } from "@material-ui/core";
import { ObserverList } from "../../components/ObserverList";
import FullScreenSpinner from "../../components/FullScreenSpinner";
import { computedFn } from "mobx-utils";
import { ItemReorderEventDetail, PredefinedColors } from "@ionic/core";

// TODO: When components grow to a point, part them out.
const TabItem = observer(({ tab, isStored, isStoredExisting, focused, onClick, onMouseButton, onContextMenu, onClose, onMute, onRefresh }) => (
  <div
    key={tab.id}
    className={`flex relative ion-activatable ion-align-items-center tabItem ${
      !isStored && tab.active ? "active" : ""} ${isStoredExisting ? "exist" : ""} ${focused ? "focused" : ""}`}
    onClick={onClick}
    onContextMenu={onContextMenu}
    onMouseDown={onMouseButton}
  >
    <IonReorder className="flex ion-align-items-center ion-justify-content-center">
      <img
        className="favicon"
        src={tab.favIconUrl || defaultFavIconUrl}
        alt=""
        onError={e => e.currentTarget.src = defaultFavIconUrl}
      />
    </IonReorder>
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
      {!isStored && (
        <Tooltip title={UIText.generalRefresh} arrow>
          <IonButton fill="clear" onClick={onRefresh} title="">
            <IonIcon icon={refreshSharp} />
          </IonButton>
        </Tooltip>
      )}
      {!isStored && (
        <Tooltip title={tab.mutedInfo.muted ? UIText.generalUnmute : UIText.generalMute} arrow>
          <IonButton fill="clear" onClick={onMute} title="">
            <IonIcon
              icon={
                tab.mutedInfo.muted
                  ? volumeMuteSharp
                  : tab.audible
                  ? volumeHighOutline
                  : volumeOffOutline
              }
            />
          </IonButton>
        </Tooltip>
      )}
      <IonButton fill="clear" onClick={onContextMenu}>
        <IonIcon icon={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonRippleEffect />
  </div>
));

const TabGroupItem = observer(({ isStored, group, renderTabs, onStoreClick, onWindowClick }) => (
  <div key={group.id}>
    <IonListHeader color="light" className="windowTitle font-xs textBold textDarkMedium" lines="full">
      <IonText>{group.title}</IonText>
      {!isStored && (
        <Tooltip arrow title={UIText.storeWindow} placement="left">
          <IonButton
            className="noHover"
            fill="clear"
            title=""
            size="small"
            onClick={e => onStoreClick(e, group.id)}
          >
            <IonIcon icon={archiveOutline} />
          </IonButton>
        </Tooltip>
      )}
      <Tooltip arrow title={isStored ? UIText.reopenWindow : UIText.goToWindow} placement="left">
        <IonButton
          color={isStored ? "tooling" : "primary"}
          className="noHover"
          fill="clear"
          title=""
          size="small"
          onClick={e => onWindowClick(e, group.id)}
        >
          <IonIcon icon={isStored ? openOutline : browsersOutline} />
        </IonButton>
      </Tooltip>
    </IonListHeader>
    {renderTabs(group.tabs)}
  </div>
));

const CurrentWindowHeader = observer(({ isStored, onStoreClick }) => (
  <IonListHeader color="light" className="windowTitle font-xs textBold textDarkMedium" lines="full">
    <IonText>{UIText.currentWindow}</IonText>
    {!isStored && (
      <Tooltip arrow title={UIText.storeWindow} placement="left">
        <IonButton
          className="noHover"
          fill="clear"
          title=""
          size="small"
          onClick={onStoreClick}
        >
          <IonIcon icon={archiveOutline} />
        </IonButton>
      </Tooltip>
    )}
  </IonListHeader>
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
  storedTabGroups: TabGroup[];
  showStored: boolean;
  sortAsc: {
    stored: boolean;
    current: boolean;
  };
}

@observer
class MainPage extends React.Component {
  controller = new Controller<MainStore>("mainPage");

  @computed get store() { return this.controller.store };

  @observable windowId: number;
  @observable windowTitle: string;
  @observable tabs: chrome.tabs.Tab[] = [];
  @observable windows: chrome.windows.Window[] = [];

  @observable searchValue: string = "";
  @observable selectMode: boolean = false;

  @observable loading: boolean = true;
  @observable fabOpen: boolean = false;

  @computed get otherTabs(): MainPage["tabs"] {
    return arrayFlat(this.windows.map(w => w.tabs));
  };
  @computed get filteredTabs(): MainPage["tabs"] {
    return this.tabs.filter(tab => matchTabs(tab, this.searchValue));
  };

  @computed get currentTabGroup(): TabGroup {
    return {
      id: this.windowId,
      title: this.windowTitle,
      tabs: this.tabs
    };
  };
  @computed get otherTabGroups(): TabGroup[] {
    return this.windows.filter(w => w.id !== this.windowId).map(window => ({
      id: window.id,
      title: this.getWindowTitle(window),
      tabs: window.tabs
    }));
  };
  @computed get filteredOtherTabGroups(): TabGroup[] {
    if (!this.searchValue) return this.otherTabGroups;
    const matchedWindows = this.windows.filter(w => w.id !== this.windowId && w.tabs.some(t => matchTabs(t, this.searchValue)));
    return matchedWindows.map(window => ({
      id: window.id,
      title: this.getWindowTitle(window),
      tabs: window.tabs.filter(t => matchTabs(t, this.searchValue))
    }));
  };
  @computed get sortedOtherTabGroups(): TabGroup[] {
    const tabGroups = toJS(this.filteredOtherTabGroups);
    return tabGroups.sort(dirSort(this.sortAsc, "id"));
  };
  @computed get allTabs(): MainPage["tabs"] {
    return [].concat(this.tabs, this.otherTabs);
  };

  @computed get showOtherWindows(): boolean {
    return this.store.showOtherWindows;
  };
  @computed get showStored(): boolean {
    return this.store.showStored;
  };
  @computed get sortAsc(): boolean {
    this.controller.storage.initProperty("sortAsc", { current: false, stored: false });
    return this.store.sortAsc[this.showStored ? "stored" : "current"];
  };
  @computed get storedTabGroups(): IObservableArray<TabGroup> {
    this.controller.storage.initProperty("storedTabGroups", []);
    return this.store.storedTabGroups as IObservableArray<TabGroup>;
  };
  @computed get filteredStoredTabGroups(): TabGroup[] {
    return this.storedTabGroups.filter(g => g.tabs.some(t => matchTabs(t, this.searchValue)));
  };
  @computed get sortedStoredTabGroups(): TabGroup[] {
    const tabGroups = toJS(this.filteredStoredTabGroups);
    return tabGroups.sort(dirSort(this.sortAsc, "id"));
  };

  constructor(props) {
    super(props);
    setTimeout(this.initialize, 100);
    this.controller.disposer = reaction(() => this.showStored, () => {
      if (!this.showStored) this.getTabs();
    });
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
    this.controller.dispose();
  };

  getTabs = () => env === "prod" && chrome.windows.getCurrent({ populate: true }, window => {
    this.windowId = window.id;
    this.windowTitle = this.getWindowTitle(window);
    this.tabs = window.tabs || [];
    chrome.windows.getAll({ populate: true }, windows => {
      this.windows = windows;
      this.loading = false;
    });
  });

  getWindowTitle = computedFn((window: chrome.windows.Window) => {
    if (env !== "prod") return;
    if (!window) return;
    const activeTab = window.tabs.find(t => t.active);
    if (!activeTab) return;
    return UIText.windowTitle(activeTab.title, window.tabs.length);
  });

  findStoredTabAndGroup = computedFn((tabId: number): [TabGroup, chrome.tabs.Tab] => {
    const tabGroup: TabGroup = this.storedTabGroups.find(tg => tg.tabs.some(t => t.id === tabId));
    if (!tabGroup) return [null, null];
    const tab: chrome.tabs.Tab = tabGroup.tabs.find(t => t.id === tabId);
    return [tabGroup, tab];
  });

  findExistingTab = computedFn((tab: chrome.tabs.Tab) => this.allTabs.find(t => t.url === tab.url));

  dumpTabs = async () => {
    await when(() => !this.loading);
    // const groups: chrome.tabs.Tab[][] = [this.tabs];
    // for (const group of this.otherTabGroups) {
    //   groups.push(group.tabs);
    // }
    const groups: TabGroup[] = this.showStored ? this.storedTabGroups : [
      this.currentTabGroup,
      ...this.otherTabGroups
    ];
    const data = JSON.stringify(toJS(groups));
    ui.copyStringToClipboard(data);
    return console.log(data);
  };

  restoreTabs = () => {
    const handler = data => {
      const { tabsJSON } = data;
      const groups = safeParseJSON(tabsJSON);
      if (this.showStored) {
        this.store.storedTabGroups = groups;
      } else {
        groups.forEach(group => {
          chrome.windows.create({ url: group.map(tab => tab.url ), focused: false })
        });
      }
    };
    return ui.alert({
      header: UIText.restoreTabs,
      inputs: [{
        name: "tabsJSON",
        type: "text",
        placeholder: UIText.tabsJSON
      }],
      enterKeyHandler: handler,
      buttons: [
        {
          role: "cancel",
          text: UIText.generalCancel
        },
        {
          text: UIText.generalConfirm,
          handler
        }
      ]
    });
  };

  openStoredTab = (event: any, tabId: number) => {
    const [tabGroup, _tab] = this.findStoredTabAndGroup(tabId);
    if (!tabGroup) return;
    const isMiddleClick = event.button && event.button === 1;
    const shouldOpenBackground = event.ctrlKey || isMiddleClick;
    const existingTab = this.findExistingTab(_tab);
    if (existingTab && !shouldOpenBackground) {
      if (existingTab.windowId) chrome.windows.update(existingTab.windowId, { focused: true });
      return chrome.tabs.update(existingTab.id, { active: true });
    }
    return chrome.tabs.create({ url: _tab.url, active: !event.ctrlKey && !isMiddleClick });
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
    if (this.showStored) {
      event.persist();
      return this.openStoredTab(event, id);
    }
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    if (event.ctrlKey) {
      return chrome.tabs.create({ url: tab.url, active: false });
    }
    if (tab.windowId) chrome.windows.update(tab.windowId, { focused: true });
    return chrome.tabs.update(id, { active: true });
  };

  handleMouseButton = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (!event.button || event.button !== 1) return;
    if (this.showStored) {
      event.persist();
      return this.openStoredTab(event, id);
    }
    if (env !== "prod") return;
    const tab = this.allTabs.find(tab => tab.id === id);
    if (!tab) return;
    return chrome.tabs.create({ url: tab.url, active: false });
  };

  handleWindowClick = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (this.showStored) {
      const tabGroup = this.storedTabGroups.find(tg => tg.id === id);
      if (!tabGroup) return;
      const tab = (tabGroup.tabs || [])[0];
      if (!tab) return;
      const existingTabGroup = [
        this.currentTabGroup,
        ...this.otherTabGroups
      ].find(tg => tg.tabs.every(tab => tabGroup.tabs.some(t => t.url === tab.url)));
      if (existingTabGroup) {
        chrome.windows.update(existingTabGroup.id, { focused: true });
      } else {
        chrome.windows.create({ url: tab.url, focused: false }, window => {
          const remainingTabs = toJS(tabGroup.tabs);
          remainingTabs.shift();
          remainingTabs.forEach(t => chrome.tabs.create({ windowId: window.id, url: t.url }));
        });
      }
    }
    if (env !== "prod") return;
    const window = this.windows.find(w => w.id === id);
    if (!window) return;
    return chrome.windows.update(id, { focused: true });
  };

  handleWindowStore = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (this.showStored) return;
    if (env !== "prod") return;
    const window = this.windows.find(w => w.id === id);
    if (!window) return;
    const tabGroup = this.otherTabGroups.find(tg => tg.id === window.id);
    if (!tabGroup) return;
    const existingStored = this.storedTabGroups.find(tg => (
      tg.id === tabGroup.id || tg.tabs.every(tab => tabGroup.tabs.some(t => t.url === tab.url))
    ));
    if (existingStored) {
      Object.assign(existingStored, toJS(tabGroup));
    } else {
      this.store.storedTabGroups.push(toJS(tabGroup));
    }
    setTimeout(() => this.store.showStored = true);
  };

  handleCurrentWindowStore = (event: any) => {
    preventDefaultStopProp(event);
    if (this.showStored) return;
    if (env !== "prod") return;
    const existingStored = this.storedTabGroups.find(tg => (
      tg.id === this.currentTabGroup.id || tg.tabs.every(tab => this.currentTabGroup.tabs.some(t => t.url === tab.url))
    ));
    if (existingStored) {
      Object.assign(existingStored, toJS(this.currentTabGroup));
    } else {
      this.store.storedTabGroups.push(toJS(this.currentTabGroup));
    }
    setTimeout(() => this.store.showStored = true);
  };

  handleMenu = (event: any, id: number) => {
    let tab: chrome.tabs.Tab;
    if (this.showStored) {
      const [tabGroup, _tab] = this.findStoredTabAndGroup(id);
      if (!tabGroup) return;
      tab = _tab;
    } else {
      tab = this.allTabs.find(tab => tab.id === id);
    }
    if (!tab) return;
    const menuItems = getTabMenuItems(tab, this.showStored);
    ui.popoverMenu({
      event,
      menuItems,
      showBackdrop: false
    });
    return false;
  };

  handleClose = (event: any, id: number) => {
    preventDefaultStopProp(event);
    if (this.showStored) {
      const [tabGroup, tab] = this.findStoredTabAndGroup(id);
      (tabGroup.tabs as IObservableArray<chrome.tabs.Tab>).remove(tab);
      if (isEmpty(tabGroup.tabs)) this.storedTabGroups.remove(tabGroup);
      return;
    }
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

  handleReorder = (windowId: number) => (event: CustomEvent<ItemReorderEventDetail>) => {
    const { from, to, complete } = event.detail;
    if (isNonZeroFalse(to) || isNonZeroFalse(from)) return;
    if (this.showStored) {
      const storedTabGroup = this.storedTabGroups.find(tg => tg.id === windowId);
      if (isEmpty(storedTabGroup)) return;
      return complete(storedTabGroup.tabs);
    } else {
      const tabGroup = this.currentTabGroup.id === windowId ? this.currentTabGroup : this.otherTabGroups.find(tg => tg.id === windowId);
      if (isEmpty(tabGroup)) return;
      const tabToMove = tabGroup.tabs[from];
      if (!tabToMove) return;
      if (env === "prod") chrome.tabs.move(tabToMove.id, { index: to });
      complete();
      return this.getTabs();
    }
  };

  toggleSort = () => this.store.sortAsc[this.showStored ? "stored" : "current"] = !this.sortAsc;

  renderTabs = (tabs: chrome.tabs.Tab[]) => <IonReorderGroup disabled={false} onIonItemReorder={this.handleReorder(tabs[0].windowId)}>
    <ObserverList
      list={tabs}
      getItemKey={tab => tab.id}
      render={tab => <TabItem
        tab={tab}
        isStored={this.showStored}
        isStoredExisting={this.showStored && !!this.findExistingTab(tab)}
        focused={!this.showStored && tab.windowId === this.windowId}
        onClose={e => this.handleClose(e, tab.id)}
        onRefresh={e => this.handleRefresh(e, tab.id)}
        onMute={e => this.handleMute(e, tab.id)}
        onClick={e => this.handleTabClick(e, tab.id)}
        onMouseButton={e => this.handleMouseButton(e, tab.id)}
        onContextMenu={e => this.handleMenu(e, tab.id)}
      />}
    />
  </IonReorderGroup>;

  renderTabGroups = groups => <ObserverList
    list={groups}
    getItemKey={group => group.id}
    render={group => <TabGroupItem
      isStored={this.showStored}
      group={group}
      renderTabs={this.renderTabs}
      onStoreClick={this.handleWindowStore}
      onWindowClick={this.handleWindowClick}
    />}
  />;

  render() {
    const filteredTabs = isEmpty(this.filteredTabs) ? (
      isEmpty(this.sortedOtherTabGroups) && (
        <div className="flex ion-padding ion-text-center ion-justify-content-center">
          <IonText color="medium">深海シティアンダーぐらあああ～～♫</IonText>
        </div>
      )
    ) : <>
      <CurrentWindowHeader isStored={this.showStored} onStoreClick={this.handleCurrentWindowStore}/>
      {this.renderTabs(this.filteredTabs)}
    </>;

    return <IonPage className="mainPage">
      <IonHeader translucent>
        <ListControlToolbar
          className="searchTool"
          color={this.showStored ? "tooling" as PredefinedColors : "primary"}
          value={this.searchValue}
          debounce={50}
          searchBarPlaceholder={UIText.searchForTabs}
          searchIconTooltip={UIText.quickSearch}
          onSearchChange={this.handleSearchChange}
          onSearchIconClick={this.handleQuickSearchMenu}
        />
      </IonHeader>
      <IonContent>
        {this.loading ? <FullScreenSpinner name="crescent" /> : (
          this.showStored ? (
            <IonList className="ion-no-padding">
              {this.renderTabGroups(this.sortedStoredTabGroups)}
            </IonList>
          ) : this.searchValue ? (
            <IonList className="ion-no-padding">
              {this.sortAsc && filteredTabs}
              {!isEmpty(this.sortedOtherTabGroups) && this.renderTabGroups(this.sortedOtherTabGroups)}
              {!this.sortAsc && filteredTabs}
            </IonList>
          ) : this.showOtherWindows ? (
            <IonList className="ion-no-padding">
              {this.sortAsc && <>
                <CurrentWindowHeader isStored={this.showStored} onStoreClick={this.handleCurrentWindowStore}/>
                {this.renderTabs(this.tabs)}
              </>}
              {this.renderTabGroups(this.sortedOtherTabGroups)}
              {!this.sortAsc && <>
                <CurrentWindowHeader isStored={this.showStored} onStoreClick={this.handleCurrentWindowStore}/>
                {this.renderTabs(this.tabs)}
              </>}
            </IonList>
          ) : (
            <IonList className="ion-no-padding">
              {this.renderTabs(this.tabs)}
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
          <IonFabButton
            color={this.showStored ? "tooling" : "primary"}
            onClick={() => this.fabOpen = !this.fabOpen}
          >
            <IonIcon icon={optionsOutline} />
          </IonFabButton>
          <IonFabList side="top">
            <Tooltip
              arrow
              placement="right"
              title={this.showStored ? UIText.showActive : UIText.showStored}
            >
              <IonFabButton title="" onClick={() => this.store.showStored = !this.store.showStored}>
                <MdIcon icon={this.showStored ? mdiWeb : mdiArchive} />
              </IonFabButton>
            </Tooltip>
            {!this.showStored && (
              <Tooltip
                arrow
                placement="right"
                title={this.showOtherWindows ? UIText.showCurrentWindows : UIText.showAllWindows}
              >
                <IonFabButton title="" onClick={() => this.store.showOtherWindows = !this.store.showOtherWindows}>
                  <MdIcon icon={this.showOtherWindows ? mdiCollapseAll : mdiExpandAll} />
                </IonFabButton>
              </Tooltip>
            )}
            <Tooltip
              arrow
              placement="right"
              title={UIText.restoreTabs}
            >
              <IonFabButton title="" onClick={this.restoreTabs}>
                <MdIcon icon={mdiApplicationImport} />
              </IonFabButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="right"
              title={UIText.dumpTabs}
            >
              <IonFabButton title="" onClick={this.dumpTabs}>
                <MdIcon icon={mdiApplicationExport} />
              </IonFabButton>
            </Tooltip>
            {(this.showOtherWindows || this.showStored) && (
              <Tooltip
                arrow
                placement="right"
                title={UIText.sortDirection}
              >
                <IonFabButton title="" onClick={this.toggleSort}>
                  <MdIcon icon={this.sortAsc ? mdiArrowCollapseUp : mdiArrowCollapseDown} />
                </IonFabButton>
              </Tooltip>
            )}
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>;
  }
}

export default MainPage;
