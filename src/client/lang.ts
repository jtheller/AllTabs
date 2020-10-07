import { computed, observable } from "mobx";
import { languages } from "../config/languages";
import { Controller } from "../lib/controller";
import { LanguageType } from "../lib/types/miscTypes";
import { alertController } from "@ionic/core";
import { env } from "../config/env";

// _UITextStore
// Persistent storage model for
// UIText language preferences and other options.
interface _UITextStore { preference: LanguageType["id"] }

// _UIText.
// Main class instance for UIText library used across the web app and its
// persistent data management and store.
// Class instance would contain all dictionary items as its immediate properties.
class _UIText extends Controller<_UITextStore> {
  [key: string]: any;

  @observable ready: boolean;

  @computed get preference() {
    return this.store.preference;
  }

  constructor() {
    super("UIText");
    this.setUITextLanguage().catch(console.error);
  }

  get languages(): LanguageType[] {
    return languages.map(lang => ({
      selected: this.preference === lang.id,
      ...lang
    }));
  }

  get defaultLanguage(): LanguageType {
    return languages.find(lang => lang.default);
  }

  get defaultDictionary(): LanguageType["dictionary"] {
    return (this.defaultLanguage || {}).dictionary;
  }

  getLanguage = (id: LanguageType["id"]) =>
    languages.find(lang => lang.id === id);

  switchLanguage = (id: LanguageType["id"]) => {
    const selected: LanguageType = this.getLanguage(id);
    if (selected) this.store.preference = selected.id;
    return window.location.reload();
  };

  setUITextLanguage = async () => {
    await this.storage.isReady();
    const selected: LanguageType =
      this.getLanguage(this.preference) ||
      this.getLanguage(navigator.language) ||
      this.defaultLanguage;
    const { dictionary } = selected || {};

    if (!dictionary) return alertController.create({
      translucent: true,
      header: "UIText initialization error",
      message: "(Dictionary not present)",
      buttons: [{ text: "Reload", handler: () => window.location.reload() }]
    })
    .then(popup => popup.present() && popup);
    _UIText.replaceWithPlaceholderRecurse(this.defaultDictionary, dictionary, this, "_UIText");
    this.store.preference = selected.id;
    return this.ready = true;
  };

  static replaceWithPlaceholderRecurse = (property, dictionary, target, keyName) => {
    const keys = Object.keys(property);
    for (const key of keys) {
      const attributes = { enumerable: true };
      if (dictionary[key]) {
        attributes["get"] = () => dictionary[key];
      } else {
        if (typeof property[key] === "object") {
          target[key] = {};
          _UIText.replaceWithPlaceholderRecurse(
            property[key],
            {},
            target[key],
            `${keyName}.${key}`
          );
          continue;
        }
        const value = `{${keyName}.${key}}`;
        attributes["value"] = typeof property[key] === "function"
          ? () => value : value;
      }
      Object.defineProperty(target, key, attributes);
    }
  }
}

export const UIText = observable(new _UIText());

export class UIException implements Error {
  name: string;
  message: string;
  stack: string;
  constructor(exceptionName, private readonly error?) {
    this.name = exceptionName;
    this.message = UIText.exceptions[exceptionName] || exceptionName;
    if (error) this.stack = error.stack;
  }
}

if (window && env as string !== "prod") (window as any).UIText = UIText;