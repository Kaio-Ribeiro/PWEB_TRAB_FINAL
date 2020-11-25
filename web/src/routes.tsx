import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import CampaingMap from './pages/campaignMap' 

function Routes(){
  return(
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={CampaingMap}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default Routes;