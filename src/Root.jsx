import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';
import Home from './containers/home';

const Root = () => (
  <Switch>
    <Route
      exact
      path={routes.INDEX}
      component={Home}
    />
  </Switch>
);

export default Root;
