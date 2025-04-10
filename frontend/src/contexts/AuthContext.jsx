import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const LOCAL_STORAGE_KEY = 'authState';

export const AuthProvider = ({ children }) => {
  const [telegramId, setTelegramId] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [os_id, setOsId] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        if (parsedState.isAuthenticated) {
          setTelegramId(parsedState.telegramId || '');
          setIsAuthenticated(true);
          setOsId(parsedState.os_id || '');
          setProfile(parsedState.profile || null);
        }
      } catch (e) {
        console.error('Error parsing auth state from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    const authState = {
      telegramId,
      isAuthenticated,
      os_id,
      profile
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authState));
  }, [telegramId, isAuthenticated, os_id, profile]);

  const logout = () => {
    setTelegramId('');
    setIsAuthenticated(false);
    setOsId('');
    setProfile(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{
      telegramId, setTelegramId,
      isAuthenticated, setIsAuthenticated,
      os_id, setOsId,
      profile, setProfile,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);