import React, { useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonList, IonItem, IonAlert } from '@ionics/react';
import '../../../../public/styles/UserProfile.scss';
import { connect } from "../../../data/connect";
import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps { }


interface StateProps {

}

interface DispatchProps {

}

interface UserProfileProps extends OwnProps, StateProps, DispatchProps { }

const UserProfile: React.FC<UserProfileProps> = ({  }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: UserProfile
})
