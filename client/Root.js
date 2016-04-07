import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Container from './Container';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Nav from './shared/header/Nav';
import Footer from './shared/footer/Footer';

const Root = () => (
  <Router history={ browserHistory }>
    <Route path ="/" component={ Container }>
      <IndexRoute components={ { header: Nav, body: Home, footer: Footer } }></IndexRoute>
      <Route path="/page1" components={ { header: Nav, body: Page1, footer: Footer } }></Route>
      <Route path="/page2" components={ { header: Nav, body: Home, footer: Footer } }></Route>
    </Route>
  </Router>
);

export default Root;
