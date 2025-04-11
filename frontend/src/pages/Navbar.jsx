import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "../assets/css/Navbar.css";

function Navbar() {
  const { logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) navigate("/signup");
  }, [isAuthenticated]);

  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/';

  return (
    
    <nav className="navbar">
      <h2 className="logo">OneStep</h2>
      <div className="nav-links">
        {!isAuthenticated && (
          <>
            {!isSignupPage && <Link to="/">Signup</Link>}
            {!isLoginPage && <Link to="/login">Login</Link>}
          </>
        )}

        {isAuthenticated && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/kyc-setup">KYC</Link>
            <Link to="/biometric-setup">Biometric</Link>
            <Link to="/passcode-setup">Passcode</Link>
            <Link to="/" onClick={logout}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
