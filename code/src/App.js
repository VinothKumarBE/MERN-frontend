import React,{useCallback, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import User from './user/pages/User';
import MainNavigation from './shared/components/Navigation/MainNavigation';
//import UserPlaces from './places/pages/UserPlaces';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
const App=()=> {

  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [userId, setUserId] =useState(false);

  const  login = useCallback((uid)=>{
    setIsLoggedIn(true);
    setUserId(uid);
  },[])
  const  logout = useCallback(()=>{
    setIsLoggedIn(false);
    setUserId(null);
  },[])
  let  routes;
  if(isLoggedIn){
    routes=(
      <React.Fragment>
    <Route path="/" exact>
      <User />
    </Route>
      <Route path="/:userId/places" exact >
     <UserPlaces />
   </Route>
   <Route path="/new/place" exact>
    <NewPlace />
  </Route>
    <Route path="/places/:placeId">
       <UpdatePlace />  
    </Route>     
   <Redirect to="/" /> 
  </React.Fragment>
    );

  }else{
    routes=(
  <React.Fragment>
    <Route path="/" exact>
      <User />
    </Route>
      <Route path="/:userId/places" exact >
     <UserPlaces />
   </Route>
   <Route path="/auth">
      <Auth />
   </Route>
   <Redirect to="/auth" /> 
  </React.Fragment>
    );
  }
  return (
<AuthContext.Provider
 value={{isLoggedIn:isLoggedIn, userId: userId, login: login, logout: logout }}>
<Router>
 <MainNavigation />
  <main>
    <Switch>
       {routes}
    </Switch>
  </main>
</Router>
</AuthContext.Provider>
  );
}

export default App;
