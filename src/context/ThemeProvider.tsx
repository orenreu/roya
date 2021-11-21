import React, { createContext, useContext } from 'react';
import theme from '../themes/theme';

interface ThemeContextType {
  theme: {
    fonts: Record<string, unknown>;
    palette: Record<string, string>;
  };
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: {
    fonts: {},
    palette: {},
  },
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
