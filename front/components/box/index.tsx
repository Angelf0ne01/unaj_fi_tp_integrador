import React from "react";
import { Box as MuiBox, BoxProps, useTheme } from "@mui/material";

export function Box({ children, ...props }: BoxProps) {
  const theme = useTheme();

  return (
    <MuiBox
      {...props}
      sx={{
        ...props.sx,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {children}
    </MuiBox>
  );
}
