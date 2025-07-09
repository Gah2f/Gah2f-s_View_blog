import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; 

  const navigate = useNavigate();
  const logout = () =>{
    navigate('/')
  }

  const value = {
    toggleDarkMode,
    darkMode,
    navigate,
    logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
