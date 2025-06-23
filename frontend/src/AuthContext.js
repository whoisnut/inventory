import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  function login(userObj) { setUser(userObj); }
  function logout() { setUser(null); }
  function updateProfile(newProfile) { setUser({ ...user, ...newProfile }); }
  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() { return useContext(AuthContext); }