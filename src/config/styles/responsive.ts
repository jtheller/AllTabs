import { computed, observable } from "mobx";
import { SelectInterface } from "@ionic/core";

class ResponsiveStyles {
  mobileWidth: number = 768;

  mql = window.matchMedia(`(max-width: ${this.mobileWidth}px)`);
  @observable deviceDimension: {
    isMobile: boolean
  } = {
    isMobile: this.mql.matches
  };

  // @computed get pickerInterface(): SelectInterface {
  //   return (this.deviceDimension.isMobile
  //     ? isPlatform("ios")
  //     ? "alert"
  //     : "popover"
  //     : "popover") as SelectInterface;
  // };

  @computed get pickerInterface(): SelectInterface {
    return "popover";
  };

  constructor () {
    this.mql.addListener(event => (
      this.deviceDimension.isMobile = event.matches
    ));
  }
}

export const responsive = new ResponsiveStyles();