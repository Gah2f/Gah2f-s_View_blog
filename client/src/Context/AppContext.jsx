import { createContext, useContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();
  const logout = () => {
    axios.defaults.headers.common["Authorization"] = "";
    setToken(null);
    navigate("/");
  };
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");

      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Failed to fetch blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();

    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `${token}`;
    }
  }, []);
  const value = {
    axios,
    toggleDarkMode,
    darkMode,
    navigate,
    logout,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
    toast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
