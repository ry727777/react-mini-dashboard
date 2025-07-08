import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import "./DashboardLayout.css"

const DashboardLayout = ({ children }) => {
  return (
    <div className='dasboard-container'>
      <Header />

      <div className='layout-body'>
        <Sidebar />
        {/* Main content goes here */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
