import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

function Profile() {
  const { telegramId, os_id, setProfile, profile } = useAuth();
  
  useEffect(() => {
    api.get(`/profile/${os_id}`).then(res => setProfile(res.data));
  }, [os_id]);

  return (
    <div className="container">
      <h2>Your Profile</h2>
      <p><strong>OS-ID:</strong> {os_id}</p>
      <p><strong>Full Name:</strong> {profile?.full_name}</p>
      <p><strong>KYC Status:</strong> {profile?.kyc_status}</p>
      <p><strong>Biometric:</strong> {profile?.biometric_set ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Profile;
