import React from "react";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "./../context";
import { SWRConfig } from "swr";
import { apiInstance } from "../utils/axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <SWRConfig
          value={{
            fetcher: apiInstance,
          }}
        >
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </SWRConfig>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
