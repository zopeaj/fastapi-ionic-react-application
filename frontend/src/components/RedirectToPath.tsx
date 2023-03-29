import React, { useEffect, useContext } from 'react';
import { IonRouterContext } from '@ionic/react';
import { Redirect } from "react-router-dom";


interface RedirectToPathProps {
  loggedIn: boolean;
  isActive: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const RedirectToPath: React.FC<RedirectToPathProps> = ({loggedIn, isActive, isAuthenticated, isAdmin}) => {
  const ionRouterContext = useContext(IonRouterContext);
  useEffect(() => {

    if (!loggedIn && !isAuthenticated && !isAdmin && !isActive) {
      ionRouterContext.push("/login") || <Redirect exact to="/login"/>;
    }

    if (loggedIn && isAuthenticated && isActive && !isAdmin) {
      ionRouterContext.push("/main/user/account/") || <Redirect exact to="/main/user/account/"/>;
    }

    if(loggedIn && isAuthenticated && isActive && isAdmin) {
      ionRouterContext.push("/main/admin/account/") || <Redirect exact to="/main/admin/account/"/>;
    }

    ionRouterContext.push('/main') || <Redirect exact to="/main"/>;

  }, [loggedIn, isActive, isAuthenticated, isAdmin, ionRouterContext]);
}

export default RedirectToPath;
