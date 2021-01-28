import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import CharityEventsMap from './pages/charityEventsMap' 

function Routes(){
  return(
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={CharityEventsMap}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default Routes;