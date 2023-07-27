/**
 * @description: 权限上下文
 */

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);

AuthContext.displayName = "AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [token, setToken] = useState<string | null>(null);
  // const navigate = useNavigate();

  // const login = (token: string) => {
  //   setToken(token);
  //   navigate("/");
  // };

  // const logout = () => {
  //   setToken(null);
  //   navigate("/login");
  // };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth 必须在 AuthProvider 中使用");
  }
  return context;
};

export default AuthContext;
