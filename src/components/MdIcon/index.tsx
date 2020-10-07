import Icon from "@mdi/react";
import React from "react";
import { observer } from "mobx-react";
import { getIonStyleVal } from "../../config/styles/style-utils";
import { Colors } from "../../lib/types/miscTypes";

interface MdIconProps extends Pick<React.HTMLProps<HTMLDivElement>, "className" | "onClick"> {
  icon: string;
  size?: number | string | null;
  color?: Colors | string;
}

const MdIcon: React.FC<MdIconProps> = observer(
  ({ className, icon, size, color }) => {
    color = [
      "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark", "tooling"
    ].includes(color) ? getIonStyleVal(`--ion-color-${color}`) : color;
    return <Icon className={`mdIcon ${className || ""}`} path={icon} size={size || 1} color={color} />;
  });

export default MdIcon;