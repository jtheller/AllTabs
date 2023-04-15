import React from "react";
import { useIonToast } from "@ionic/react";
import { ui } from "../../client/ui";

const ToastControllerExtractor: React.FC = () => {
  ui.setToastController(useIonToast());
  return null;
};

export default ToastControllerExtractor;
