import {
  createContext,
  useContext,
  useState
} from "react";

import axios from "axios";

const AuthContext = createContext();

const API_URL = "http://localhost:5000/api/auth";


export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("cinebookUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });


  const [token, setToken] = useState(() => {

    return localStorage.getItem("cinebookToken");

  });


  const login = async (email, password) => {

    try {

      const response = await axios.post(
        `${API_URL}/login`,
        {
          email,
          password
        }
      );

      const { token, user } = response.data;

      localStorage.setItem(
        "cinebookUser",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "cinebookToken",
        token
      );

      setUser(user);
      setToken(token);

      return {
        success: true,
        user
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed"
      };

    }

  };


  const logout = () => {

    localStorage.removeItem("cinebookUser");
    localStorage.removeItem("cinebookToken");

    setUser(null);
    setToken(null);

  };


  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isLoggedIn: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}


export function useAuth() {

  return useContext(AuthContext);

}