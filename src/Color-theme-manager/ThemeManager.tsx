import React, { createContext, useState, useContext, ReactNode, FC } from 'react';

// Define the shape of the context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create a context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: string;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme = 'light' }) => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  console.log(context?.theme,"context")
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
