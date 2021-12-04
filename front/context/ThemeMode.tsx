import React from "react";
import {
  useTheme,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { Button, PaletteMode } from "@mui/material";
import MuiTheme from "./../style/mui-style";

interface ThemeModeParms {
  children: React.ReactNode;
}

interface ThemeModeProps extends ThemeModeParms {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

//@ts-ignore
export const ThemeModeContext =
  React.createContext<Omit<ThemeModeProps, "children">>(null);

export function ThemeProvider({ children }: ThemeModeParms) {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  const toggleColorMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  //@ts-ignore
  const theme = React.useMemo(() => createTheme(MuiTheme[mode]), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = React.useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
}
