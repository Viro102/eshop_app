import { createContext, useState, useEffect, useMemo } from "react";
import { checkAuth } from "../api";

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await checkAuth();

        if (response.message === "Authorized!") {
          setIsLoggedIn(true);
          setUser(response.data as User);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth status", error);
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  const value = useMemo(() => {
    return { isLoggedIn, setIsLoggedIn, user, setUser };
  }, [isLoggedIn, setIsLoggedIn, user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
