import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function BiometricSetup() {
  const { telegramId } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const handleScan = async (type) => {
    setStatus('Verifying...');
    toast.success('Verifying...');
    try {
      await api.post('/biometric', { telegram_id: telegramId, type });
      toast.success(`${type} scan verified ✅`);
      setStatus(`${type} scan verified ✅`);
      setTimeout(() => navigate('/kyc-setup'), 1500);
    } catch (err) {
      toast.error('Biometric verification failed');
      setStatus('Biometric verification failed');
    }
  };

  return (
    <div className="container">
      <h2>Biometric Setup</h2>
      <p>Select the biometric method to simulate:</p>
      <button onClick={() => handleScan('fingerprint')}>Scan Fingerprint</button>
      <button onClick={() => handleScan('face')}>Scan Face</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default BiometricSetup;