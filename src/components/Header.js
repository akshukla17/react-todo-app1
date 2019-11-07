import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav>
        <ul style={{listStyle:'none'}}>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;