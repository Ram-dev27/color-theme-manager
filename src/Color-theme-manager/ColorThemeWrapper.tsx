import { ReactNode } from "react";
import { useTheme } from "./ThemeManager";

function ColorThemeWrapper({ children }: { children: ReactNode }) {
  const { themeClass } = useTheme();
  return <div className={`${themeClass}`}>{children}</div>;
}

export default ColorThemeWrapper;
