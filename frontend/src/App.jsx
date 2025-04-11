import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";
import OTP from "./pages/Otp";
import OTPVerify from "./pages/OTPVerify";
import Dashboard from "./pages/Dashboard";
import TokenDashboard from "./pages/TokenDashboard";
import RecoveryPhrase from "./pages/RecoveryPhrase";
import Profile from "./pages/Profile";
import KYCSetup from "./pages/KYCSetup";
import BiometricSetup from "./pages/BiometricSetup";
import PasscodeSetup from "./pages/PasscodeSetup";
import Login from "./pages/Login";
import AccountSetup from "./pages/AccountSetup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer limit={5} newestOnTop position="top-right" />
      <Routes>
        {/* Auth & Setup Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/kyc-setup" element={<KYCSetup />} />
        <Route path="/biometric-setup" element={<BiometricSetup />} />
        <Route path="/passcode-setup" element={<PasscodeSetup />} />
        <Route path="/recovery-phrase" element={<RecoveryPhrase />} />

        {/* Dashboard & User Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/token-dashboard" element={<TokenDashboard />} />
        <Route path="/profile" element={<Profile />} />

        {/* Optional: 404 Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;