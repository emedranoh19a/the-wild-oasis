import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { PropTypes } from "prop-types";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  //not only sets state, it also syncronizes it with local storage.
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.any,
};

function useDarkMode() {
  const context = useContext(DarkModeContext);
  console.log(context);
  if (context === undefined)
    throw new Error(
      "Dark Mode Context was used outside the respective Context Provider"
    );
  return context;
}

export { DarkModeProvider, useDarkMode };
