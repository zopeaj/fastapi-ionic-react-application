import React, { useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonList, IonItem, IonAlert } from '@ionics/react';
import '../../../../public/styles/UserProfile.scss';
import { connect } from "../../../data/connect";
import { RouteComponentProps } from "react-router";

interface StateProps {

}

interface OwnProps {

}

interface DispatchProps {

}

interface UserSettingsProps extends OwnProps, StateProps, DispatchProps { }


const UserSettings:React.FC<UserSettingsProps> = ({}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>User Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      User Settings
    </IonContent>
    </IonPage>
  );
}

export default connect<OwnProps, {}, DispatchProps>({
 component: UserSettings
})
