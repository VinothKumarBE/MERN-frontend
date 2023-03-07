import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import User from './user/pages/User';
const App=()=> {
  return (
  
<Router>
  <Switch>
          
             <Route path="/" exact><User></User></Route>
           
             <Route path="/new/places"><NewPlace></NewPlace></Route>

             <Redirect to="/" ></Redirect>
  </Switch>
</Router>

  );
}

export default App;
