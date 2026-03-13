import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const logOut = () => {
    console.log("logout");
  };

  const authInfo = {
    user,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;