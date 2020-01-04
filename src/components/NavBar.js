import React from 'react';
import NotLoggedInNav from './NotLoggedInNav';
import LoggedInNav from './LoggedInNav';

const NavBar = ({ currentUser }) => {
  return currentUser ? <LoggedInNav currentUser={currentUser} /> : <NotLoggedInNav />;
};

export default NavBar;
