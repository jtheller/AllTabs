import { AlertButton, AlertOptions, PredefinedColors } from "@ionic/core";
import { KeyboardEvent, ReactNode } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";

export type KeyValuePairs<T = any> = { [key: string]: T; }

export type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never

export type NumBool = 1 | 0;

export type JSONString = string;

export interface ShowConfirmOptions {
  header: string,
  verb: string,
  name: string,
  handler: (event: any) => void
}

export interface StdErr<T = any> extends AxiosError<T> {
  message: string,
}

export interface UIErrorOptions {
  err: StdErr | Error;
  actionName?: string;
  buttons?: (AlertButton | string)[];
}

export interface UIAlertOptions extends AlertOptions {
  enterKeyHandler?: (data: KeyValuePairs<string>) => any;
}

export interface UIPopoverMenuItem {
  key?: number | string;
  text: string;
  icon?: string | ReactNode;
  color?: PredefinedColors;
  fill?: "solid" | "clear";
  handler: (event: any) => void;
}

export interface UIPopoverMenuOptions {
  event: any;
  menuItems: UIPopoverMenuItem[];
  showBackdrop?: boolean;
}

export interface ApiOptions extends AxiosRequestConfig {
  endpoint: string;
  noRenew?: boolean;
  noKickOut?: boolean;
  noAuth?: boolean;
  renewingOAuth2Data?: boolean;
}

export interface LanguageType {
  id: string;
  selected?: boolean;
  default?: boolean;
  description: string;
  dictionary: {
    [key: string]: string | number | Function | object;
  };
}

export interface KeyCodeBinding {
  [key: number]: (event: KeyboardEvent, ...args: any[]) => void;
}

export interface KeyCodeBindingCombos {
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
}

export type Colors = "tooling" | PredefinedColors;

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export interface HelpTipOptions extends UIAlertOptions {}

export interface SortingCategory<T> {
  description: string;
  handler: (a: T, b: T) => 1 | -1;
}