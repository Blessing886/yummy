import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <h1>YUMMY!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/popular-categories">Popular Categories</Link></li>
          <li><Link to="/super-delicious">Super Delicious</Link></li>
          <li><Link to="/form-submit">Submit Recipe</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar