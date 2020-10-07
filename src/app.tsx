import React from "react";
import { IonApp, setupConfig } from "@ionic/react";
import { observer } from "mobx-react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./config/styles/ionic/variables.css";
import "./config/styles/global.css";
/* Components */
import PopoverContainer from "./components/PopoverContainer";
/* App Modules */
import { UI, ui } from "./client/ui";
import MainPage from "./pages/MainPage";
import { UIText } from "./client/lang";

// To keep platform styling consistency, set all styling mode to Material.
setupConfig({
  mode: "md"
});

@observer
class App extends React.Component {
  ui: UI;

  constructor(props) {
    super(props);
    this.ui = ui;
  };

  render() {
    return UIText.ready ? <IonApp>
      <MainPage />
      <PopoverContainer ui={this.ui} />
    </IonApp> : null;
  }
}

export default App;
