import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='bg-dark'>
      <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-5 d-flex'>
        <ul className='navbar-nav d-flex justify-content-between flex-grow-1'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/'
            >
              Gallery Films
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/favorites'
            >
              Favorites Films
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
