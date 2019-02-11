import React from 'react';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="logout-container">
        <button className="button" onClick={() => {props.fetchLogout()}}>Logout
        </button>
      </div>
      <div className="routes-container">
        <button className="button">assigned</button>
        <button className="button">watched</button>
        <button className="button">notifications</button>
      </div>
    </div>
  )
};

export default NavBar;