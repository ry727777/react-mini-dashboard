import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import "./Dashboard.css"
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div>
        <h3>Main Dashboard Content</h3>

        <div className="statcard-row">
          <StatCard title="Total Users" value="1,320" icon="👤" change="+5.3%" />
          <StatCard title="Revenue" value="$4,512" icon="💰" change="+2.1%" />
          <StatCard title="Orders" value="96" icon="📦" change="-1.2%" />
        </div>
      </div>
      <div>
        <Chart/>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
