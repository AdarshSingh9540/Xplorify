
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";


function App() {
  return (
    <KindeProvider
      clientId="628c70d7f2bb4ac3a7c0cc99e9cc2dc5"
      domain="https://xplorify.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Card /></>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </KindeProvider>
  );
}

export default App;
