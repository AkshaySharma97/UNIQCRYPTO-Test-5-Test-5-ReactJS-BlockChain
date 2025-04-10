import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function Otp() {
  const { telegramId, setIsAuthenticated, setOsId, osId } = useAuth();
  const [otpInput, setOtpInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || 'signup';

  const handleVerifyOtp = async () => {
    if (!otpInput) return toast.error("Please enter the OTP.");

    try {
      setLoading(true);
      const response = await api.post(mode === 'signup' ? "/verify-otp" : "/verify-login-otp", {
        telegram_id: telegramId,
        otp: otpInput
      });

      toast.success("OTP verified successfully!");

      if (mode === 'signup') {
        const osIdFromServer = response.data.os_id;
        setOsId(osIdFromServer);
        setIsAuthenticated(true);
        navigate('/account-setup');
      } else {
        // login
        setIsAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-page">
      <div className="back-link" onClick={() => navigate(mode === 'signup' ? "/signup" : "/login")}>
        ← Back
      </div>

      <div className="otp-card">
        <h1 className="otp-title">Enter OTP</h1>
        <p className="otp-subtitle">Sent to Telegram: <strong>{telegramId}</strong></p>

        <input
          className="otp-input"
          type="text"
          placeholder="Enter OTP"
          value={otpInput}
          onChange={(e) => setOtpInput(e.target.value)}
        />

        <button className="otp-button" onClick={handleVerifyOtp} disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <p className="otp-help-text">Didn't receive an OTP? Try again shortly.</p>
      </div>
    </div>
  );
}

export default Otp;