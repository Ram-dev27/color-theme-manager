import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import "./theme.css";


interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: "light" | "dark" ;
}

interface ICustomTheme {
  backgroundColor: string;
  textColor: string;
}

interface IAddTheme extends ICustomTheme {
  themeName:"string"
}

// Define the shape of the context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  setCustomThemeColor: (customTheme: IAddTheme) => void;
}

// Create a context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);


export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
}) => {
  const [theme, setTheme] = useState<'light'|'dark'>(initialTheme);

  const themeColor = {
    dark: {
      backgroundColor: "#000",
      textColor: "#fff",
    },
    light: {
      backgroundColor: "#fff",
      textColor: "#333",
    },
  };

  const setThemeColor = (propertyName: string, themeColor: string) => {
    document.documentElement.style.setProperty(propertyName, themeColor);
  };

  useEffect(() => {
    setThemeColor(
      "--background-color",
      theme === "light"
        ? themeColor.light.backgroundColor
        : themeColor.dark.backgroundColor
    );
    setThemeColor(
      "--text-color",
      theme === "light" ? themeColor.light.textColor : themeColor.dark.textColor
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  /**
   * The function `setCustomThemeColor` sets custom theme colors for background and text in a React
   * application.
   * @param {ICustomTheme} customTheme - The `customTheme` parameter is an object of type `ICustomTheme`
   * that contains properties for defining custom theme colors.
   */
  const setCustomThemeColor = (customTheme: ICustomTheme) => {
    themeColor[theme].backgroundColor = customTheme.backgroundColor
    themeColor[theme].textColor = customTheme.textColor
    setThemeColor("--background-color", customTheme.backgroundColor);
    setThemeColor("--text-color", customTheme.textColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { theme, toggleTheme, setCustomThemeColor } = context;
  return {
    theme,
    toggleTheme,
    setCustomThemeColor,
    themeClass: "color-theme",
  };
};
