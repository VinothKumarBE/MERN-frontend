import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import User from './user/pages/User';
import MainNavigation from './shared/components/Navigation/MainNavigation';
//import UserPlaces from './places/pages/UserPlaces';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
const App=()=> {
  return (
  
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
            
           
          <Route path="/new/place" exact>
            <NewPlace />
          </Route>

          <Redirect to="/" ></Redirect>
           
    </Switch>
  </main>
</Router>

  );
}

export default App;
