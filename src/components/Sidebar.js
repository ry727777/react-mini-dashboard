import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          <li className="sidebar-item">🏠 Dashboard</li>
          <li className="sidebar-item">📊 Reports</li>
          <li className="sidebar-item">👥 Users</li>
          <li className="sidebar-item">⚙️ Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
