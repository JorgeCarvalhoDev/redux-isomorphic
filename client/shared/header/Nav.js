import React from 'react';
import { IndexLink, Link } from 'react-router';

const Nav = () => (
  <nav>
    <li><IndexLink activeClassName="active" to="/">Home </IndexLink></li>
    <li><Link activeClassName="active" to="/page1">Page1</Link></li>
    <li><Link activeClassName="active" to="/page2">Page2</Link></li>
  </nav>
);

// use: activeClassName="active" or activeStyle={{color: 'green'}}

export default Nav;
