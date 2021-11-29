import React from "react";
import { Box } from "./../box";
import { AppBar } from "./../appBar";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar />
      <Box
        sx={{
          p: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
