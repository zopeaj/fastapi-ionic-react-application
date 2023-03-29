import React, { useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonList, IonItem, IonAlert } from '@ionics/react';
import '../../../../public/styles/UserProfile.scss';
import { connect } from "../../../data/connect";
import { RouteComponentProps } from "react-router";


interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {

}

interface UserAccountProps extends OwnProps, StateProps, DispatchProps { }

const UserAccount: React.FC<UserAccountProps> = ({ username }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>User Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { username && (
          <div className="">
            <h2>{username}</h2>
            <IonList inset>
              <IonItem onClick={}>Update Picture</IonItem>
              <IonItem onClick={}>Change Username</IonItem>
              <IonItem onClick={}>Change Password</IonItem>
              <IonItem routerLink="/settings">User Settings</IonItem>
              <IonItem routerLink="/profile">User Profiles</IonItem>
              <IonItem routerLink="/logout" routerDirection="none">Logout</IonItem>
            </IonList>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    username: state.user.username
  }),
  mapDispatchToProps: {

  },
  component: UserAccount
})
