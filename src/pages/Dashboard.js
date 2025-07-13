import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import "./Dashboard.css"
import { useEffect, useState } from 'react';

const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // show 5 users per page
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://686d6324c9090c4953863392.mockapi.io/api/v1/stats')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Failed to fetch users', err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.user && user.user.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

const totalPages = Math.ceil(filteredUsers.length / usersPerPage);


  return (
    <DashboardLayout onSearch={setSearch}>
      <div className="dashboard-table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Total Orders</th>
              <th>Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.user}</td>
                  <td>{user.Order}</td>
                  <td>₹{user.revenue}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '16px', color: '#777' }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
