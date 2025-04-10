import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function KYCSetup() {
  const { telegramId, profile } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(profile?.fullName ?? '');
  const [status, setStatus] = useState('');
  const [selfieFile, setSelfieFile] = useState(null);
  const [idFile, setIdFile] = useState(null);

  const handleSubmit = async () => {
    if (!fullName || !selfieFile || !idFile) {
      toast.error('All fields are required.');
      setStatus('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('telegram_id', telegramId);
    formData.append('full_name', fullName);
    formData.append('selfie', selfieFile);
    formData.append('gov_id', idFile);

    try {
      await api.post('/kyc', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Verification Pending...');
      setStatus('Verification Pending...');
      setTimeout(() => navigate('/profile'), 2000);
    } catch (err) {
      toast.error('Submission failed.');
      setStatus('Submission failed.');
    }
  };

  return (
    <div className="container">
      <h2>KYC Setup</h2>
      <label>Full Name</label>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

      <label>Upload Selfie with ID</label>
      <input type="file" accept="image/*" onChange={(e) => setSelfieFile(e.target.files[0])} />

      <label>Upload Government ID</label>
      <input type="file" accept="image/*" onChange={(e) => setIdFile(e.target.files[0])} />

      <button onClick={handleSubmit}>Submit KYC</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default KYCSetup;