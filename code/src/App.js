import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import User from './user/pages/User';
import MainNavigation from './shared/components/Navigation/MainNavigation';
const App=()=> {
  return (
  
<Router>
 <MainNavigation />
    <main>
      <Switch>
            
            
             <Route path="/" exact><User></User></Route>
           
             <Route path="/new/places" exact><NewPlace></NewPlace></Route>

             <Redirect to="/" ></Redirect>
           
    </Switch>
  </main>
</Router>

  );
}

export default App;
