import * as React from "react";
import { IonButton } from "@ionic/react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import "./styles.css";
import { Colors } from "../../lib/types/miscTypes";

interface PopoverHoverButtonProps {
  color?: Colors;
  title?: string;
  buttonContent?: React.ReactNode;
  popoverContent: React.ReactNode;
  isOpen?: boolean;
  onDidDismiss?: (event: any) => void;
}

@observer
class PopoverHoverButton extends React.Component<PopoverHoverButtonProps> {
  @observable hovered: boolean = false;

  onHover = (event: any) => this.hovered = true;

  onLeave = (event: any) => this.hovered = false;

  render() {
    const {
      color,
      title,
      buttonContent,
      popoverContent,
      isOpen,
      onDidDismiss
    } = this.props;

    return (
      <div className="popoverHoverButtonContainer">
        <IonButton color={color} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
          {title || buttonContent}
        </IonButton>
        {popoverContent && <div className={`popoverHoverButtonContent ${(this.hovered || isOpen) ? "visible" : ""}`}>
          {popoverContent}
        </div>}
      </div>
    )
  }
}

export default PopoverHoverButton