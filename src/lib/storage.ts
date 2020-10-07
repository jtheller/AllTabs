import { Plugins } from "@capacitor/core";
import { autorun, observable, when } from "mobx";
import { randomString, safeParseJSON } from "../utils/helpers";
import { env } from "../config/env";
import flags from "../config/flags";

let Storage;

// if (env === "prod") {
//   Storage = {};
//   Storage.get = query => new Promise((resolve, reject) => chrome.storage.sync.get(query.key, resolve));
//   Storage.set = ({ key, value }: { key: string; value: any; }) => new Promise(resolve => chrome.storage.sync.set({ [key]: value }, resolve));
//   Storage.clear = () => new Promise(resolve => chrome.storage.sync.clear(resolve));
// } else {
  Storage = Plugins.Storage;
// }

const sweepStatus = observable({
  finished: false
});

export interface PersistentStore<T> {
  name: string;
  disposer: () => void;
  dispose: () => void;
  clearStore: () => void;
  data: T;
}

export class Store<T> implements PersistentStore<T> {
  disposer;
  name: PersistentStore<T>["name"];
  @observable data: PersistentStore<T>["data"] = {} as T;
  @observable ready: boolean = false;

  constructor(name) {
    this.name = name;
    this.waitSweep()
    .then(this.restoreData)
    .then(this.registerStorageListener)
    .finally(() => this.ready = true);
    return this;
  }

  getDriverData = async (): Promise<T> =>
    Storage.get({ key: this.name })
    .then(result => {
      const { value } = result;
      return safeParseJSON(value);
    });

  private waitSweep = () => when(() => !!sweepStatus.finished);

  private registerStorageListener = () =>
    this.disposer = autorun(() =>
      Storage.set({
        key: this.name,
        value: JSON.stringify(this.data)
      })
    );

  private restoreData = async () =>
    this.getDriverData()
    .then(data => {
      if (data) Object.assign(this.data, data);
      return Promise.resolve();
    });

  isReady = async () => when(() => this.ready);

  initProperty = (propertyName: keyof T, data: T[keyof T]) => {
    if (!this.data.hasOwnProperty(propertyName)) this.data[propertyName] = data;
  };

  dispose = () => this.disposer && this.disposer();

  clearStore = () => this.data = {} as T;

  static getDeviceId = () => deviceStore.data.id;

  static setDeviceId = () => deviceStore.data.id = randomString();

  static checkSweepOldData = async () => {
    const storageTimestamp = await Storage.get({ key: "timestamp" });
    const storageCleanupDate = flags.storageCleanupDate && new Date(flags.storageCleanupDate).getTime();
    const lastCleanupDate = Number(storageTimestamp.value);
    if (!storageCleanupDate) return;
    if (!lastCleanupDate || lastCleanupDate < storageCleanupDate) {
      return Storage.clear()
      .then(() => Storage.set({ key: "timestamp", value: new Date().getTime().toString() }))
      .then(() => window.location.reload());
    }
  };
}

Store.checkSweepOldData().then(Store.setDeviceId).finally(() => sweepStatus.finished = true);

export const deviceStore = new Store<{ id: string }>("device");

if (window && env as string !== "prod") (window as any).deviceStore = deviceStore;