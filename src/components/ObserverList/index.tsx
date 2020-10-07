import { observer, Observer } from "mobx-react";
import React from "react";

export const ObserverList = observer(({ list, render }) => <Observer>{() => <>
    {list.map(item => render(item))}
  </>}</Observer>
);