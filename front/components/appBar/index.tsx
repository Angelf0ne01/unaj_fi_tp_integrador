import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeMode } from "../../context";
import router from "next/router";

function DarkLightModeToggle() {
  const { mode, toggleColorMode } = useThemeMode();

  return (
    <IconButton
      color="inherit"
      aria-label="Toggle dark/light mode"
      onClick={toggleColorMode}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}

export function AppBar() {
  const { push } = router;
  const pages = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Equipos",
      url: "/teams",
    },
    {
      label: "Jugadores",
      url: "/players",
    },
  ];

  return (
    <MuiAppBar position="static" color="default">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, idx) => (
            <Button
              key={idx}
              onClick={() => push(page?.url)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page?.label}
            </Button>
          ))}
        </Box>
        <div>
          <DarkLightModeToggle />
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
