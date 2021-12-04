import React from "react";
import { Box } from "./../box";
import { AppBar } from "./../appBar";
import { Breadcrumbs, Typography } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <Box style={{ minHeight: "98vh" }}>
      <AppBar />
      <div
        style={{
          padding: 30,
        }}
      >
        {children}
      </div>
    </Box>
  );
}

export default Layout;
