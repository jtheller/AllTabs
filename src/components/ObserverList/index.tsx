import { observer } from "mobx-react";

export const ObserverList = observer(({ list, render }) => list.map(item => render(item)));