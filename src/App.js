import React from 'react';
import Dashboard from './pages/Dashboard';
import Reports from './components/Reports';
import Setting from './components/Setting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </Router>
  )
};

export default App;
