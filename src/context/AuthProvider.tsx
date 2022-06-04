import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { User } from 'firebase/auth';
import { auth } from '../firebase';

type ProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((fbUser) => {
      console.log('구독실행', fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
