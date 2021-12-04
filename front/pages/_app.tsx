import React from "react";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "./../context";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
