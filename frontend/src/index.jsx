import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login.jsx';
import Dashboard from './Components/dashboard.jsx';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default Index;
