import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import authService from "../services/authService";
import { User } from "../modals/User";
import { AuthContextType } from "../modals/AuthContextType";

interface AuthProviderProps {
  children: ReactNode;
}

const defaultAuthValue: AuthContextType = {
  user: null,
  isLoading: true,
  login: async () => undefined,
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthValue);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authService
        .validateToken(token)
        .then((userData: User) => {
          setUser(userData);
          setIsLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
          setIsLoading(false);
        });
    } else{
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await authService.login(username, password);
      setUser(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
