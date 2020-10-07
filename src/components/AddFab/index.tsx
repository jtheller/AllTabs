import React from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { observer } from "mobx-react";
import { add } from "ionicons/icons";

interface AddFabProps extends React.ComponentProps<typeof IonFabButton> {
  isMobile?: boolean;
}

const AddFab: React.FC<AddFabProps> = observer(
  ({ isMobile, disabled, routerLink, onClick }) =>
    <IonFab
      vertical="bottom"
      horizontal={isMobile ? "end" : "center"}
      slot="fixed"
    >
      <IonFabButton
        translucent
        disabled={disabled}
        routerLink={routerLink}
        onClick={onClick}
      >
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
);

export default AddFab;