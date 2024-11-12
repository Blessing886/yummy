import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <h1>YUMMY!</h1>
            <li><Link to="/"></Link>Home</li>
            <li><Link to="/popular-categories">Popular Categories</Link></li>
            <li><Link to="/super-delicious">Super Delicious</Link></li>
    </nav>
  )
}

export default Navbar