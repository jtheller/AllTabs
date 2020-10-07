import { UIPopoverMenuItem } from "../../lib/types/miscTypes";
import { IonIcon, IonItem, IonList, IonText } from "@ionic/react";
import React from "react";

export const PopoverMenuBase = (menuItems: UIPopoverMenuItem[], dismiss?: (event?: any) => void) => () => (
  <IonList className="ion-no-padding">
    {menuItems.map(item => (
      <IonItem
        key={item.key || item.text}
        button
        lines="full"
        color={item.fill === "solid" ? item.color : undefined}
        onClick={event => {
          dismiss && dismiss();
          return item.handler(event);
        }}
      >
        {item.icon && typeof item.icon === "string" ? (
          <IonIcon
            slot="start"
            color={(!item.fill || item.fill === "clear") ? item.color : "light"}
            icon={item.icon}
          />
        ) : item.icon}
        <IonText className="font-s" color={(!item.fill || item.fill === "clear") ? item.color : "light"}>
          {item.text}
        </IonText>
      </IonItem>
    ))}
  </IonList>
);