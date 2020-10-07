import * as React from "react";
import { observer } from "mobx-react";
import { IonPopover } from "@ionic/react";
import { UI } from "../../client/ui";

const PopoverContainer: React.FC<{ ui: UI }> = observer(({ ui }) => (
  <IonPopover
    cssClass="global-popover-container"
    isOpen={ui.popoverVisible}
    onDidDismiss={ui.dismissPopover}
    {...ui.popoverProps}
  >
    {ui.popoverComponent && <ui.popoverComponent />}
  </IonPopover>
));

export default PopoverContainer;