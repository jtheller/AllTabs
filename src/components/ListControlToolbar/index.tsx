import { IonSearchbar } from "@ionic/react";
import React from "react";
import "./styles.less";
import { PredefinedColors } from "@ionic/core";
import { whenFulfill } from "../../utils/helpers";
import { Tooltip } from "@material-ui/core";

export interface ListControlToolbarProps extends React.HTMLProps<HTMLDivElement> {
  color?: PredefinedColors;
  value?: string;
  debounce?: number;
  searchBarPlaceholder?: string;
  searchIconTooltip?: string;
  onSearchChange: (event: CustomEvent) => void;
  onSearchIconClick: (event: any) => void;
}

class ListControlToolbar extends React.Component<ListControlToolbarProps> {
  searchBarElm: HTMLIonSearchbarElement;
  searchBarIconElm: HTMLIonIconElement;

  constructor(props) {
    super(props);
    const getSearchBarIconElm = (): HTMLIonIconElement =>
      this.searchBarElm.getElementsByClassName("searchbar-search-icon")[0] as HTMLIonIconElement;
    whenFulfill(() => !!this.searchBarElm)
    .then(() => whenFulfill(() => !!getSearchBarIconElm()))
    .then(() => this.searchBarIconElm = getSearchBarIconElm())
    .then(() => this.searchBarIconElm.onclick = this.handleSearchIconClick);
  }

  searchBarRef = elm => this.searchBarElm = elm;

  handleSearchIconClick = (event: any) => this.props.onSearchIconClick && this.props.onSearchIconClick(event);

  render() {
    const {
      className,
      color,
      value,
      debounce,
      searchBarPlaceholder,
      searchIconTooltip,
      onSearchChange,
      onSearchIconClick
    } = this.props;
    return <div className={`flex search listControlToolbar ${className || ""}`}>
      <IonSearchbar
        ref={this.searchBarRef}
        className="ion-no-padding relative"
        debounce={debounce || 100}
        color={color}
        value={value}
        // searchIcon={checkmarkDoneSharp}
        onIonChange={onSearchChange}
        placeholder={searchBarPlaceholder}
      >
        {searchIconTooltip && <Tooltip title={searchIconTooltip} arrow>
          <div className="searchIconTooltipHolder absolute" onClick={onSearchIconClick} />
        </Tooltip>}
      </IonSearchbar>
    </div>;
  }
}

export default ListControlToolbar;
