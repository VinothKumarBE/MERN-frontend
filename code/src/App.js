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

  const [isLogedIn, setIsLoggedIn] =useState(false);
  const  login = useCallback(()=>{
    setIsLoggedIn(true)
  },[])
  const  logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[])
  return (
  <AuthContext.Provider value={{isLogedIn:isLogedIn, login: login, logout: logout }}>
<Router>
 <MainNavigation />
    <main>
      <Switch>
            
          <Route path="/" exact>
            <User />
          </Route>

          <Route path="/:userId/places" exact >
            <UserPlaces />
          </Route> 

          <Route path="/places/:placeId">
          <UpdatePlace />  
          </Route>  

          <Route path="/auth">
             <Auth />
          </Route>
            
           
          <Route path="/new/place" exact>
            <NewPlace />
          </Route>

          <Redirect to="/" ></Redirect>
           
    </Switch>
  </main>
</Router>
</AuthContext.Provider>
  );
}

export default App;
