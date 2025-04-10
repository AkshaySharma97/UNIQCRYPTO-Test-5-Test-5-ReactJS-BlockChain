import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OTPVerify() {
  const { telegramId } = useAuth();
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      await api.post('/verify-otp', { telegram_id: telegramId, otp });
      navigate('/account-setup');
    } catch {
      alert('Invalid or expired OTP');
    }
  };

  return (
    <div className="container">
      <h2>Enter the OTP sent to Telegram</h2>
      <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="6-digit OTP" />
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
}

export default OTPVerify;