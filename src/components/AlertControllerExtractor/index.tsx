import React from "react";
import { useIonAlert } from "@ionic/react";
import { ui } from "../../client/ui";

const AlertControllerExtractor: React.FC = () => {
  ui.setAlertController(useIonAlert());
  return null;
};

export default AlertControllerExtractor;
