import { IonSearchbar } from "@ionic/react";
import React from "react";
import "./styles.css";
import { PredefinedColors } from "@ionic/core";
import { checkmarkDoneSharp } from "ionicons/icons";
import { whenFulfill } from "../../utils/helpers";

export interface ListControlToolbarProps extends React.HTMLProps<HTMLDivElement> {
  color?: PredefinedColors;
  debounce?: number;
  searchBarPlaceholder?: string;
  onSearchChange: (event: CustomEvent) => void;
  onSelectModeToggle: (event: CustomEvent) => void;
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

  handleSearchIconClick = (event: any) => this.props.onSelectModeToggle && this.props.onSelectModeToggle(event);

  render() {
    const {
      className,
      color,
      debounce,
      searchBarPlaceholder,
      onSearchChange
    } = this.props;
    return <div className={`flex search listControlToolbar ${className || ""}`}>
      <IonSearchbar
        ref={this.searchBarRef}
        className="ion-no-padding"
        debounce={debounce || 100}
        color={color}
        searchIcon={checkmarkDoneSharp}
        onIonChange={onSearchChange}
        placeholder={searchBarPlaceholder}
      />
    </div>;
  }
}

export default ListControlToolbar;