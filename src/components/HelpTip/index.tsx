import { observer } from "mobx-react";
import { mdiHelpCircle } from "@mdi/js";
import MdIcon from "../MdIcon";
import React from "react";
import { isEmpty, preventDefaultStopProp } from "../../utils/helpers";
import { HelpTipOptions } from "../../lib/types/miscTypes";
import { ui } from "../../client/ui";
import { IonRippleEffect } from "@ionic/react";
import { UIText } from "../../client/lang";

export interface HelpTipProps extends Partial<React.ComponentProps<typeof MdIcon>>{
  help: HelpTipOptions;
  size?: number;
}

const defaultSize = 22;

const HelpTip: React.FC<HelpTipProps> = observer(
  ({
     className,
     icon,
     color,
     size,
     onClick,
     help
   }) => {
    const showHelp = (event: any) => {
      if (onClick) return onClick(event);
      preventDefaultStopProp(event);
      if (isEmpty(help)) return;
      return ui.alert({
        header: help.header || UIText.generalHelp,
        message: help.message || "",
        buttons: [UIText.generalConfirm]
      });
    };
    return <span
      className={`relative ion-activatable ${className || ""}`}
      style={{
        height: `${(size || defaultSize) + 10}px`,
        padding: 5
      }}
      onClick={showHelp}
    >
      <MdIcon icon={icon || mdiHelpCircle} color={color || "primary"} size={`${size || defaultSize}px`} />
      <IonRippleEffect style={{ borderRadius: "50%" }} />
    </span>;
  });

export default HelpTip;