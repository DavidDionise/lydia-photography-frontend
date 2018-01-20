import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import {
  App,
  HomePage,
  ContactPage
} from 'components';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='contact' component={ContactPage} />
      </Route>
    </Router>
  );
}

export default Routes;
