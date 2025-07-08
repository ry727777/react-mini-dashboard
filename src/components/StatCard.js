import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-icon">{icon}</span>
        <h4 className="stat-card-title">{title}</h4>
      </div>
      <div className="stat-card-body">
        <h2 className="stat-card-value">{value}</h2>
        {change && <p className="stat-card-change">{change}</p>}
      </div>
    </div>
  );
};

export default StatCard;
