import React from 'react';
import { Link } from 'react-router';


const TopNav = () => (
  <nav>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/page1">Page1</Link></li>
    <li><Link to="/Page2">Page2</Link></li>
  </nav>
);

export default TopNav;
