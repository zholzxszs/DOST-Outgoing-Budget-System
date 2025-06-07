import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login.jsx';
import Dashboard from './Components/dashboard.jsx';
import Incoming from './Components/incoming.jsx';
import Outgoing from './Components/outgoing.jsx';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incoming" element={<Incoming />} />
        <Route path="/outgoing" element={<Outgoing />} />
      </Routes>
    </Router>
  );
}

export default Index;
