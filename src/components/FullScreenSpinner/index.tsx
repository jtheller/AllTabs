import React from "react";
import { IonSpinner } from "@ionic/react";
import { observer } from "mobx-react";
import { PredefinedColors, SpinnerConfigs } from "@ionic/core";
import "./styles.css"

export interface FullScreenSpinnerProps {
  color?: PredefinedColors;
  spinner?: SpinnerConfigs;
}

const FullScreenSpinner: React.FC<FullScreenSpinnerProps> =
  observer(({ color, spinner }) =>
    <div className="flex max fullScreenSpinner">
      <IonSpinner
        color={color || "primary"}
        {...spinner}
      />
    </div>
  );

export default FullScreenSpinner;