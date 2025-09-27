// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { User } from '../types';
import apiClient from '../api/apiClient';

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          // You would typically have a /profile or /verify-token endpoint
          const { data } = await apiClient.get('/auth/profile');
          setUser(data.data.user);
        } catch (error) {
          console.error("Session expired or invalid.", error);
          logout();
        }
      }
      setIsLoading(false);
    };
    validateToken();
  }, [token, logout]);

  const login = (newToken: string, userData: User) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token, user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};