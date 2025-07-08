import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const data = [
  { name: 'Users', value: 400 },
  { name: 'Orders', value: 300 },
  { name: 'Revenue', value: 300 },
  { name: 'Returns', value: 100 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
  return (
    <div style={{ padding: '20px' }}>
      <PieChart width={600} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Chart;
