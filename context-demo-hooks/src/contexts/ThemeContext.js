import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleIsDarkMode] = useToggle(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )

}
