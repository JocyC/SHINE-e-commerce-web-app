import React, { useEffect, useContext, useState } from "react";

// Set a dark mode

const getLocalStorage = () => {
  let theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  } else {
    return "light";
  }
};

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorage());
  const changeTheme = () => {
    if (!theme) {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
