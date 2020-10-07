import { UIText } from "./lang";
import { env } from "../config/env";
import { Plugins } from "@capacitor/core";
import {
  actionSheetController,
  ActionSheetOptions,
  alertController,
  AlertInput,
  modalController,
  ModalOptions,
  pickerController,
  PickerOptions,
  PopoverOptions,
  toastController,
  ToastOptions
} from "@ionic/core";
import { responsive } from "../config/styles/responsive";
import { computed, observable } from "mobx";
import { isEmpty, parseErrorMsg, parseErrorName, preventDefaultStopProp, randomString } from "../utils/helpers";
import {
  KeyCodeBinding,
  KeyCodeBindingCombos,
  ShowConfirmOptions,
  UIAlertOptions,
  UIErrorOptions,
  UIPopoverMenuOptions
} from "../lib/types/miscTypes";
import { Controller } from "../lib/controller";
import React, { KeyboardEvent } from "react";
import { PopoverMenuBase } from "../components/PopoverMenuBase";

const { Clipboard } = Plugins;

// UIStore
// Persistent storage model for UI controller
interface UIStore {}

// UI.
// Front-end UI controller class for
// various reusable methods and cross-component state store.
export class UI extends Controller<UIStore> {
  placeholderAvatarUrl = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";

  withTranslucent = {
    translucent: true
  };

  defaultDuration: number = 500;
  defaultToastDuration: number = 1500;

  @observable popoverProps: PopoverOptions;
  @observable popoverComponent: React.FC;
  @observable popoverVisible: boolean = false;

  @computed get isMobile(): boolean {
    return responsive.deviceDimension.isMobile
  };

  copyStringToClipboard = (value: string, noToast?: boolean) => {
    if (!value) return UIText.clipboardNoValue;

    return Clipboard.write({
      string: value
    })
    .then(() =>
      !noToast && this.toast({
        duration: this.defaultToastDuration * (value.length > 200 ? 2.5 : 1),
        message: UIText.copiedToClipboard(
          value.length > 200
            ? `${value.substr(0, 200)}...${
            value.length - 200
          } ${UIText.generalMore.toLowerCase()} ${UIText.characters.toLowerCase()}`
            : value
        ),
        translucent: true,
        position: this.isMobile ? "bottom" : "top"
      })
    )
    .catch(err =>
      this.toast({
        duration: this.defaultToastDuration,
        message: err,
        translucent: true,
        position: this.isMobile ? "bottom" : "top"
      })
    );
  };

  toast = (options: ToastOptions) => {
    if (isEmpty(options)) return;
    return toastController.create({
      duration: this.defaultToastDuration,
      ...options,
      ...this.withTranslucent,
      position: options.position || (this.isMobile ? "bottom" : "top")
    })
    .then(toast => toast.present() && toast);
  };

  alert = (options: UIAlertOptions) => {
    if (isEmpty(options)) return;
    let input;
    if (!isEmpty(options.inputs) && options.enterKeyHandler) {
      // Currently only supports last input in an alert.
      input = options.inputs[options.inputs.length -1];
      input.id = "ionAlertInput" + randomString();
    }
    let popup;
    return alertController.create({ ...options, ...this.withTranslucent })
    .then(p => p.present() && (popup = p))
    .then(() => this.bindAlertInputEnterKey(input, options.enterKeyHandler, popup))
    .then(() => popup);
  };

  action = (options: ActionSheetOptions) => {
    if (isEmpty(options)) return;
    return actionSheetController.create({ ...options, ...this.withTranslucent })
    .then(actionSheet => actionSheet.present() && actionSheet);
  };

  modal = (options: ModalOptions) => {
    if (isEmpty(options)) return;
    return modalController.create({ ...options, ...this.withTranslucent })
    .then(modal => modal.present() && modal);
  };

  rollerPicker = (options: PickerOptions) => {
    if (isEmpty(options)) return;
    return pickerController.create({ ...options, ...this.withTranslucent })
    .then(picker => picker.present() && picker);
  };

  popover = (options: Partial<PopoverOptions> & { component: React.FC, event: any }) => {
    if (isEmpty(options)) return;
    if (options.event) options.event.persist();
    const { component } = options;
    if (!!options.component) delete options.component;
    this.popoverProps = { ...options, ...this.withTranslucent };
    this.popoverComponent = component;
    this.popoverVisible = true;
  };

  popoverMenu = (options: UIPopoverMenuOptions) => {
    const component = PopoverMenuBase(options.menuItems, this.dismissPopover);
    return this.popover({
      event: options.event,
      component,
      showBackdrop: options.showBackdrop
    });
  };

  dismissPopover = (event?: any) => this.popoverVisible = false;

  reconfirm = (options: ShowConfirmOptions) =>
    this.alert({
      header: options.header,
      message: UIText.generalReconfirm(options.verb, options.name),
      backdropDismiss: true,
      buttons: [
        {
          text: UIText.generalNo,
          role: "cancel",
          cssClass: "textDanger"
        },
        {
          text: UIText.generalYes,
          handler: options.handler
        },
      ]
    });

  comingSoon = (header?: any) =>
    this.alert({
      header: (typeof header === "string" && header) || UIText.title,
      message: UIText.comingSoon,
      backdropDismiss: true,
      buttons: [UIText.generalConfirm]
    });

  showError = (options: UIErrorOptions) => {
    const { err, actionName, buttons } = options;
    console.warn(err);
    return this.alert({
      header: actionName || UIText.generalError,
      subHeader: (env !== "prod" && parseErrorName(err)) || "",
      message: parseErrorMsg(err, env !== "prod") || "",
      backdropDismiss: true,
      cssClass: "errorAlert",
      buttons: buttons || [UIText.generalConfirm]
    });
  };

  bindKeyCode = (eventType: "onKeyUp" | "onKeyDown", binding: KeyCodeBinding, combo?: KeyCodeBindingCombos) => {
    const handler = (event: KeyboardEvent) => {
      preventDefaultStopProp(event);
      const { keyCode } = event;
      const keyBind = binding[keyCode];
      if (!keyBind || typeof keyBind !== "function") return;
      const comboKeys = (combo && Object.keys(combo)) || [];
      for (const keyName of comboKeys) {
        if (!!combo[keyName] && !event[keyName]) return;
        if (combo[keyName] === false && event[keyName]) return;
      }
      return keyBind(event);
    };
    return { [eventType]: handler };
  };

  bindAlertInputEnterKey = (input: AlertInput, handler: UIAlertOptions["enterKeyHandler"], alert) => {
    if (!input) return;
    const elm = (window as any).document.getElementById(input.id);
    if (elm) {
      elm.onkeyup = (event: KeyboardEvent) => {
        const { keyCode } = event;
        if (keyCode !== 13) return;
        handler({ [input.name]: elm.value });
        return alert.dismiss();
      };
    }
  };
}

export const ui = new UI();

if (window && env as string !== "prod") (window as any).ui = ui;