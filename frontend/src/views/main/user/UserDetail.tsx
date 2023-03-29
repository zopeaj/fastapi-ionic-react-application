import React from "react";
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonButton, IonIcon, IonText, IonList, IonItem, IonLabel } from '@ionic/react';
import { connect } from "../../../data/connect";
import { withRouter, RouteComponentProps } from "react-router";
import { starOutline, star, share, cloudDownload } from 'ionicons/icons';
import { User } from "../../../models/User";


interface OwnProps extends RouteComponentProps { };

interface StateProps { }

interface DispatchProps { }

type UserDetailProps = OwnProps & StateProps & DispatchProps;

const UserDetail: React.FC<UserDetailProps> = ({}) => {
  return (
     <IonPage>

     </IonPage>
  );
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({

  }),
  mapDispatchToProps: {

  },
  component: withRouter(UserDetail)
})
