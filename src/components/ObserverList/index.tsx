import { observer, Observer } from "mobx-react";
import React from "react";

export const ObserverList = observer(({ list, render, getItemKey }) => (
  list && list.map((item, i) => <Observer key={getItemKey(item)}>{() => render(item, i)}</Observer>)
));
