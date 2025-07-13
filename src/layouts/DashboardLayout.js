import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import "./DashboardLayout.css"

const DashboardLayout = ({ children, onSearch }) => {
  return (
    <div className='dasboard-container'>
      <Header onSearch={onSearch}/>

      <div className='layout-body'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
