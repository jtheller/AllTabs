import { autorun, observable, when } from "mobx";
import { randomString, safeParseJSON } from "../utils/helpers";
import { env } from "../config/env";
import flags from "../config/flags";

const Storage =
  // ((chrome || {}).storage || {}).sync ||
  ((chrome || {}).storage || {}).local;

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

  private waitSweep = () => when(() => !!sweepStatus.finished);

  getDriverData = async (): Promise<T> =>
    new Promise((resolve, reject) => Storage.get(this.name, result => {
      const value = result[this.name];
      return resolve(safeParseJSON(value));
    }));

  private registerStorageListener = () =>
    this.disposer = autorun(() =>
      Storage.set({ [this.name]: JSON.stringify(this.data) })
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
    const storageTimestamp = await new Promise(resolve => Storage.get("timestamp", result => resolve(result.timestamp)));
    const storageCleanupDate = flags.storageCleanupDate && new Date(flags.storageCleanupDate).getTime();
    const lastCleanupDate = Number(storageTimestamp);
    if (!storageCleanupDate) return;
    if (!lastCleanupDate || lastCleanupDate < storageCleanupDate) {
      Storage.clear()
      Storage.set({ timestamp: new Date().getTime().toString() })
      return window.location.reload();
    }
  };
}

Store.checkSweepOldData().then(Store.setDeviceId).finally(() => sweepStatus.finished = true);

export const deviceStore = new Store<{ id: string }>("device");

if (window && env as string !== "prod") (window as any).deviceStore = deviceStore;
