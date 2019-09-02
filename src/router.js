import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import loginPage from './routes/login/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={loginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
