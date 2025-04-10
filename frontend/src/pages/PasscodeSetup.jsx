import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function PasscodeSetup() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const { telegramId, profile } = useAuth();
  const navigate = useNavigate();

  const isTooSimple = (code, dob) => {
    const dobParts = dob.split('-').join('');
    return (
      ['1234', '1111', '0000'].includes(code) ||
      code.includes(dobParts.slice(2, 6))
    );
  };

  const handleSubmit = async () => {
    setError('');
    if (passcode.length < 4) {
      toast.error(`Passcode must be at least 4 digits.`);
      setError('Passcode must be at least 4 digits.');
      return;
    }

    if (isTooSimple(passcode, profile?.dob)) {
      toast.error(`Passcode is too simple or related to your date of birth.`);
      setError('Passcode is too simple or related to your date of birth.');
      return;
    }

    try {
      await api.post('/passcode', { telegram_id: telegramId, passcode });
      toast.success(`Passcode is set`);
      navigate('/biometric-setup');
    } catch (err) {
      toast.error('Failed to save passcode.');
      setError('Failed to save passcode.');
    }
  };

  return (
    <div className="container">
      <h2>Set Your Passcode</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="password"
        value={passcode}
        maxLength={6}
        onChange={(e) => setPasscode(e.target.value)}
        placeholder="Enter a strong passcode"
      />
      <button onClick={handleSubmit}>Save & Continue</button>
    </div>
  );
}

export default PasscodeSetup;