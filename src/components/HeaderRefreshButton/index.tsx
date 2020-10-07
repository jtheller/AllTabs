import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { refresh } from "ionicons/icons";
import React from "react";
import { observer } from "mobx-react";
import { Colors } from "../../lib/types/miscTypes";

interface HeaderRefreshButtonProps extends React.ComponentProps<typeof IonButton> {
  icon?: string;
  loading: boolean;
  spinnerColor?: Colors;
  onRefresh: (event: any) => void;
}

const HeaderRefreshButton: React.FC<HeaderRefreshButtonProps> = observer(
  ({ className, slot, shape, color, spinnerColor, size, fill, icon, loading, onRefresh }) => (
    <IonButton
      className={className || ""}
      slot={slot}
      size={size}
      fill={fill}
      shape={shape || "round"}
      onClick={onRefresh}
    >
      {loading ? (
        <IonSpinner color={spinnerColor || "primary"} />
      ) : (
        <IonIcon slot="icon-only" icon={icon || refresh} color={color} size={size} />
      )}
    </IonButton>
  ));

export default HeaderRefreshButton;