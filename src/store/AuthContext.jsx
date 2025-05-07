import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fullname,setFullname] = useState(null);
  const [role, setRole] = useState(null);
  const [flashMessage, setFlashMessage] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL+"/auth-dashboard/login",{username,password});
      if (response.status >= 200 && response.status <= 300) {
        setUser(username);
        setRole(response.data.role);
        setFullname(response.data.fullname);
        return response;
      } else {
        setFlashMessage("Username atau password salah");
        return response.data;
      }
    } catch (error) {
      setFlashMessage("Terjadi kesalahan saat login",error);
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const clearFlashMessage = () => {
    setFlashMessage(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, role, login, logout, flashMessage, clearFlashMessage,fullname }}
    >
      {children}
    </AuthContext.Provider>
  );
};
