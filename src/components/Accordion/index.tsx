import * as React from "react";
import { MouseEvent, ReactNode } from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonText } from "@ionic/react";
import { caretDown, caretUp } from "ionicons/icons";
import "./styles.css";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { asyncPause } from "../../utils/helpers";
import { ComponentRef } from "@ionic/core";

export interface AccordionProps extends Omit<React.ComponentProps<typeof IonButton>, "title"> {
  title?: string | ReactNode;
  headerComponent?: ReactNode | Element | ComponentRef | React.ReactElement | null;
  expanded?: boolean;
  animated?: boolean;
  leftButton?: ComponentRef | React.ReactElement | null;
  rightButton?: ComponentRef | React.ReactElement | null;
  backgroundColor?: string;
  duration?: number;
  isMobile?: boolean;
}

@observer
class Accordion extends React.Component<AccordionProps> {
  @observable elm;
  @observable contentHeight: number = 0;
  @observable _expanded: boolean = true;

  get expanded(): boolean {
    return this.props.expanded === undefined ? this._expanded : this.props.expanded;
  };

  componentDidUpdate() {
    if (this.expanded) return this.ensureHeight();
  }

  componentDidMount() {
    return this.componentDidUpdate();
  }

  regElm = ref => this.elm = ref;

  setHeight = () => {
    if (this.elm && this.elm.scrollHeight) this.contentHeight = this.elm.scrollHeight;
  };

  ensureHeight = () => {
    let counter = 0;
    const getHeight = async () => {
      if (!this.elm) return setTimeout(getHeight);
      if (this.contentHeight !== this.elm.scrollHeight) {
        counter = 0;
        this.setHeight();
      }
      await asyncPause(100);
      counter++;
      return counter < 10 && getHeight();
    };
    return getHeight();
  };

  // recursiveSetHeight = async () => {
  //   await asyncPause(20);
  //   if (this.elm && this.elm.scrollHeight) {
  //     this.setHeight();
  //   }
  //   return this.recursiveSetHeight();
  // };

  toggleExpand = (event: any) => this._expanded = !this._expanded;

  handleClick = (event: MouseEvent<HTMLIonButtonElement & HTMLDivElement>) => {
    this.setHeight();
    this.props.onClick
      ? this.props.onClick(event)
      : this.toggleExpand(event);
  };

  render() {
    const {
      title,
      headerComponent,
      color,
      animated,
      children,
      className,
      backgroundColor,
      duration,
      leftButton,
      rightButton,
      isMobile
    } = this.props;

    return <IonCard
      className={`accordion ${animated === false ? "" : "animated"} ${className || ""}`}
      style={{ backgroundColor }}
    >
      {headerComponent ? (
        <div onClick={this.handleClick}>{headerComponent}</div>
      ) : (
        <IonCardHeader translucent className="ion-no-padding flex ion-justify-content-between">
          {leftButton || null}
          <IonButton
            expand="full"
            fill="solid"
            color={color}
            className="accordionHeaderButton ion-no-margin"
            onClick={this.handleClick}
          >
            <IonText className={`accordionHeaderTitle textNoTransform ion-text-left  ${isMobile? "font-xs" : "font-s"}`}>
              {title}
            </IonText>
            <IonIcon slot="end" icon={this.expanded ? caretUp : caretDown} />
          </IonButton>
          {rightButton || null}
        </IonCardHeader>
      )}
      <IonCardContent
        ref={this.regElm}
        className="flex column ion-no-padding accordionContent"
        style={{
          maxHeight: this.expanded ? this.contentHeight : 0,
          ...(duration && {
            transitionDuration: `${duration / 1000}s`
          })
        }}
      >
        {children && <div>{children}</div>}
      </IonCardContent>
    </IonCard>
  }
}

export default Accordion;