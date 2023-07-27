import { createContext, useContext, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface Auth {
  auth: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<Auth | null>(null);

const useAuth = (): Auth => {
  const [auth, setAuth] = useState(false);

  return {
    auth,
    login() {
      setAuth(true);
    },
    logout() {
      setAuth(false);
    },
  };
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): Auth | null => useContext(AuthContext);

export const RequireAuth = ({ children }: AuthProviderProps): JSX.Element => {
  const { auth } = useAuthContext() as Auth;
  return <>{auth ? <>{children}</> : <Navigate to="/login" />}</>;
};
