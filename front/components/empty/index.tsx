import React from "react";
import Image from "next/image";
import { Typography, useTheme } from "@mui/material";

export function Empty() {
  const src = "/assets/img/empty.svg";
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={src} alt="empty" height={300} width={300} />
      <Typography variant="h5" component="h2" align="center">
        ¡No existe ningun dato, por favor ingrese uno!
      </Typography>
    </div>
  );
}

export default Empty;
