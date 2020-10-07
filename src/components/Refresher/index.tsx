import React from "react";
import { IonRefresher, IonRefresherContent } from "@ionic/react";
import { observer } from "mobx-react";
import { refresh } from "ionicons/icons";
import { preventDefaultStopProp } from "../../utils/helpers";
import { getIonStyleVal } from "../../config/styles/style-utils";
import { Colors } from "../../lib/types/miscTypes";

export interface RefresherProps {
  customAppearance?: boolean;
  appearTop?: boolean;
  disabled?: boolean;
  onRefresh: (event: any | undefined) => void;
  color?: Colors;
  isMobile?: boolean;
}

const Refresher: React.FC<RefresherProps> = observer(
  ({ customAppearance, appearTop, onRefresh, disabled, isMobile, color }) => {
  const onIonRefresh = async (event: any) => {
    event.persist && event.persist();
    preventDefaultStopProp(event);

    if (onRefresh) await onRefresh(event);
    const { complete } = event.detail;
    complete && complete();
  };
  return isMobile && <IonRefresher
    style={appearTop && { zIndex: 999 }}
    disabled={disabled}
    slot="fixed"
    pullFactor={0.5}
    pullMin={100}
    pullMax={9999}
    onIonRefresh={onIonRefresh}
  >
    {customAppearance && <style
      children={`
      ion-refresher-content, .refresher-pulling-icon, .refresher-refreshing-icon {
        --color: ${getIonStyleVal(`--ion-color-${color}`)} !important;
        color: ${getIonStyleVal(`--ion-color-${color}`)} !important;
      }`}
    />}
    <IonRefresherContent pullingIcon={customAppearance && refresh}  />
  </IonRefresher>;
});

export default Refresher;