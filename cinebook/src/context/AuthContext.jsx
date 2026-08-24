import { useState } from "react";
import { AuthContext } from "./auth";

const USERS_KEY = "cinebookUsers";
const CURRENT_USER_KEY = "cinebookCurrentUser";

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
    } catch {
      return null;
    }
  });

  const register = ({ name, email, password }) => {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    if (users.some((savedUser) => savedUser.email === normalizedEmail)) {
      return { success: false, error: "An account already exists with this email address." };
    }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, { name: name.trim(), email: normalizedEmail, password }]));
    return { success: true };
  };

  const login = ({ email, password }) => {
    const savedUser = readUsers().find((item) => item.email === email.trim().toLowerCase());
    if (!savedUser) return { success: false, error: "No account was found for this email address." };
    if (savedUser.password !== password) return { success: false, error: "The password you entered is incorrect." };

    const currentUser = { name: savedUser.name, email: savedUser.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    setUser(currentUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, isLoggedIn: Boolean(user), register, login, logout }}>{children}</AuthContext.Provider>;
}
