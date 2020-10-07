import { Store } from "./storage";
import { computed } from "mobx";

export class Controller<StoreType = {}> {
  disposers: (() => void)[] = [];
  disposer: () => void;
  storage: Store<StoreType>;

  @computed get store(): StoreType {
    return this.storage.data;
  };

  constructor(storeName?: string) {
    this.storage = new Store(storeName || this.constructor.name);
  }

  dispose = () => {
    this.disposer && this.disposer();
    this.disposers && this.disposers.map(disposer => disposer());
  }
}