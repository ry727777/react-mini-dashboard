import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    order: '',
    revenue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://686d6324c9090c4953863392.mockapi.io/api/v1/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert('User created!');
        setShowModal(false);
        setFormData({ name: '', order: '', revenue: '' });
      })
      .catch(err => console.error('POST failed:', err));
  };

  return (
    <>
      <aside className="sidebar">
        <nav>
          <ul className="sidebar-menu">
            <li><Link to="/" className="sidebar-item">🏠 Dashboard</Link></li>
            <li><Link to="/reports" className='sidebar-item'>📊 Reports</Link></li>
            <li className="sidebar-item" onClick={() => setShowModal(true)}>👥 Users</li>
            <li><Link to="/setting" className="sidebar-item">⚙️ Settings</Link></li>
          </ul>
        </nav>
      </aside>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create User</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Orders"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Revenue"
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                required
              />
              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
