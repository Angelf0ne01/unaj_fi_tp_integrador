import React from "react";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";
import MuiTheme from "../style/mui-style";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, PaletteMode } from "@mui/material";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  const toggleColorMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  //@ts-ignore
  const theme = React.useMemo(() => createTheme(MuiTheme[mode]), [mode]);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
