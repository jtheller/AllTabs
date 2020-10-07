import { computed, IObservableArray, observable } from "mobx";
import { AccordionState } from "./types/stateTypes";
import { Controller } from "./controller";
import { randomString } from "../utils/helpers";

export interface AccordionStore {
  accordions: IObservableArray<AccordionState>;
}

export class AccordionController extends Controller<AccordionStore> {
  @observable id: number;
  @observable defaultExpand: boolean = false;

  @computed get accordions(): AccordionState[] {
    this.storage.initProperty("accordions", [] as any);
    return this.store.accordions;
  };

  constructor(storeName?, defaultExpand?: boolean) {
    super(`${storeName || randomString()}_accordion`);
    this.defaultExpand = !!defaultExpand;
  }

  getAccordion = (entity: number | string): AccordionState =>
    this.accordions.find(
      a => a.entityId === this.id &&
        (typeof entity === "number"
          ? a.id === entity
          : a.name === entity)
    );

  isAccordionExpanded = (entity: number | string): boolean =>
    this.defaultExpand
      ? !(this.getAccordion(entity) || {}).isExpanded
      : !!(this.getAccordion(entity) || {}).isExpanded;

  onAccordionFold = (entity: number | string, isExpanded: boolean) => {
    const accordion = this.getAccordion(entity);
    isExpanded = this.defaultExpand ? !isExpanded : isExpanded;
    if (accordion) return accordion.isExpanded = isExpanded;
    const data = { entityId: this.id, isExpanded, id: undefined, name: undefined };
    typeof entity === "number"
      ? (data.id = entity)
      : (data.name = entity);
    return this.accordions.push(data);
  };
}