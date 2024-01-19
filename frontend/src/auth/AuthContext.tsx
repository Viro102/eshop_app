import { createContext, useState, useEffect } from "react";

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users", {
          credentials: "include",
        });
        const data: AuthResponse = await response.json();
        setIsLoggedIn(data.isAuthorized);
      } catch (error) {
        console.error("Error checking auth status", error);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
