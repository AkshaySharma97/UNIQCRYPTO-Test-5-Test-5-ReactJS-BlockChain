import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import api from '../services/api';

function Login() {
  const { setTelegramId, setOsId, setIsAuthenticated } = useAuth();
  const [telegramInput, setTelegramInput] = useState('');
  const [osInput, setOsInput] = useState('');
  const [method, setMethod] = useState(''); // 'telegram' | 'passcode' | 'biometric'
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (!method) return toast.error('Please select a login method');
    if (!osInput) return toast.error('Please enter your OS-ID');

    if (method === 'telegram') {
      if (!telegramInput) return toast.error('Please enter your Telegram ID');

      try {
        await api.post('/send-login-otp', { telegram_id: telegramInput, os_id: osInput });
        toast.success('OTP sent to Telegram!');
        setTelegramId(telegramInput);
        setOsId(osInput);
        navigate('/otp', { state: { mode: 'login' } });
      } catch (err) {
        toast.error('Failed to send OTP');
      }

    } else if (method === 'passcode') {
      if (!passcode) return toast.error('Enter your passcode');
      try {
        const res = await api.post('/login-passcode', { os_id: osInput, passcode });
        setIsAuthenticated(true);
        setOsId(osInput);
        toast.success('Login successful!');
        navigate('/dashboard');
      } catch (err) {
        toast.error('Invalid passcode or OS-ID');
      }

    } else if (method === 'biometric') {
      // Mock biometric success
      toast.success('Biometric login verified!');
      setOsId(osInput);
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <h1>OneStep Login</h1>

      <label>Enter your OS-ID</label>
      <input
        type="text"
        placeholder="e.g., OS-ABC123"
        value={osInput}
        onChange={(e) => setOsInput(e.target.value)}
      />

      <div style={{ margin: '20px 0' }}>
        <p>Select login method:</p>
        <button onClick={() => setMethod('telegram')}>Telegram OTP</button>
        <button onClick={() => setMethod('passcode')}>Passcode</button>
        <button onClick={() => setMethod('biometric')}>Biometric</button>
      </div>

      {method === 'telegram' && (
        <>
          <label>Telegram Username</label>
          <input
            type="text"
            placeholder="@yourtelegram"
            value={telegramInput}
            onChange={(e) => setTelegramInput(e.target.value)}
          />
        </>
      )}

      {method === 'passcode' && (
        <>
          <label>Enter Passcode</label>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
        </>
      )}

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default Login;