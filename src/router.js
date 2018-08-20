import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './components/home'

export default (
    <div>
        <Switch>
            <Route component = {Home} exact path = "/"/>
        </Switch>
    </div>
)