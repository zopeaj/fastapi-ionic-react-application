import React, { useEffect } from "react";
import { Route, Redirect, Routes } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import "./theme/variable.css";
import { AppContextProvider } from "./data/AppContext";
import { loadCurrentUserData } from "./data/user/user.actions";
import { connect } from "./data/connect";

import UserAccount from "./views/main/user/UserAccount";
import UserSettings from "./views/main/user/UserSettings";
import UserProfile from "./views/main/user/UserProfile";

import AdminAccount from "./views/main/admin/AdminAccount";
import AdminSettings from "./views/main/admin/AdminSettings";
import AdminProfile from "./views/main/admin/AdminProfile";


import Login  from "./views/Login";
import Signup from "./views/Signup";
import { Main } from "./views/Main";
import { Start } from "./views/Start";


import RedirectToPath from "./components/RedirectToPath";

const App: React.FC = () => {
  return (
     <AppContextProvider>
       <IonicAppConnected />
     </AppContextProvider>
  )
}

interface StateProps {
  isAdmin: boolean;
  isActive: boolean;
  isAuthenticated: boolean;
  loggedIn: boolean;
}



interface DispatchProps {
  loadCurrentUserData: typeof loadCurrentUserData;
}

loggedIn, isActive, isAuthenticated, isAdmin
interface UserAppProps extends StateProps, DispatchProps { }

export const UserApp: React.FC<UserAppProps> = ({ isAdmin, isActive, isAuthenticated, loggedIn, loadCurrentUserData }) => {

  useEffect(() => {
    loadCurrentUserData();
  }, []);

  return (
     <IonApp>
       <IonReactRouter>
         <IonRouterOutlet id="main">
           <Redirect exact path="*" to="/login"/>
           <Route path="/" render={() => <RedirectToPath loggedIn={loggedIn} isActive={isActive} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />} exact />
           <Route path="/main" component={Main} />
           <Route path="/login" component={Login} />
           <Route path="/signup" component={Signup} />
           <Route path="/logout" render={() => <RedirectToPath loggedIn={loggedIn} isActive={isActive} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />} />
           <Routes exact path="/main/user/account/" component={UserAccount}>
             <Route path="settings" component={UserSettings} />
             <Route path="profile" component={UserProfile} />
           </Routes>
           <Routes path="/main/admin/account/" component={AdminAccount}>
             <Route path="settings" component={AdminSettings} />
             <Route path="profile" component={AdminProfile} />
           </Routes>
         </IonRouterOutlet>
       </IonReactRouter>
     </IonApp>
  );
}


const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    isAdmin: state.user.isAdmin,
    isActive: state.user.isActive,
    isAuthenticated: state.user.isAuthenticated,
    loggedIn: state.user.loggedIn,
  }),
  mapDispatchToProps: { loadCurrentUserData, },
  component: UserApp
})
