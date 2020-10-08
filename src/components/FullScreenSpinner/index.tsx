import React from "react";
import { IonSpinner } from "@ionic/react";
import { observer } from "mobx-react";
import "./styles.css";

export interface FullScreenSpinnerProps extends React.ComponentProps<typeof IonSpinner> {}

const FullScreenSpinner: React.FC<FullScreenSpinnerProps> =
  observer(props =>
    <div className="flex max fullScreenSpinner">
      <IonSpinner
        {...props}
      />
    </div>
  );

export default FullScreenSpinner;