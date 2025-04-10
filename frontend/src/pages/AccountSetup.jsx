import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import "../assets/css/AccountSetup.css";
import { toast } from "react-toastify";

function AccountSetup() {
  const { telegramId, setOsId, setProfile, osId, profile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Optional: Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { fullName, dob, phone } = form;

    if (!fullName.trim() || !dob || !phone.trim()) {
      setError('All fields are required');
      toast.error('All fields are required');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/users/setup", {
        telegramId,
        ...form,
      });

      const { success, osId } = response.data;

      if (success) {
        setOsId(osId);
        setProfile({ fullName, dob, phone });
        navigate('/passcode-setup');
      } else {
        setError('Verification failed. Please try again.');
        toast.error('Verification failed. Please try again.');
      }
    } catch (error) {
      console.error('API error:', error);
      setError(
        error.response?.data?.message ||
        'Something went wrong. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-setup-container">
      <h2>Account Setup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Continue'}
        </button>
      </form>
    </div>
  );
}

export default AccountSetup;