import React from 'react';
import avatar from '../assets/avatar.png';
import './Header.css';


const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-left'>
        {/* Left: App Logo or Title */}
        <h2>My Dashboard</h2>
      </div>

      <div className='header-middle'>
        {/* Middle: Search bar */}
        <input type="text" placeholder="Search..." />
      </div>

        <div className='header-right'>
          <span>Rahul Yadav</span>
          <img src={avatar} alt="User Avatar" width="32" height="32" />
        </div>
    </header>
  );
};

export default Header;
