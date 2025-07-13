import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Chart from '../components/Chart';

const Reports = () => {
  return (
    <DashboardLayout>
      <div style={{ padding: '20px' }}>
        <h2>Reports</h2>
        <Chart />
      </div>
    </DashboardLayout>
  );
};

export default Reports;
