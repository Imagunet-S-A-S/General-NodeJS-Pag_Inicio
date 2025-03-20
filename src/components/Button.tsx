import React from "react";
import { Button, Box, useMediaQuery } from "@mui/material";

interface AppButtonProps {
  text: string;
  url: string;
  imageSrc: string;
}

const AppButton: React.FC<AppButtonProps> = ({ text, url, imageSrc }) => {
  // Detectar si estamos en un móvil
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Button
      variant="contained"
      onClick={() => window.open(url, "_blank")}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? 80 : 110,  // Botón más pequeño en móvil
        height: isMobile ? 80 : 110,
        borderRadius: "50%",
        backgroundColor: "white",
        color: "black",
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={text}
        sx={{
          width: isMobile ? 40 : 50,  // Imagen más pequeña en móvil
          height: isMobile ? 40 : 50,
          objectFit: "contain",
        }}
      />
      <span style={{ fontSize: isMobile ? "0.7rem" : "0.8rem", marginTop: 5, color: "black" }}>
        {text}
      </span>
    </Button>
  );
};

export default AppButton;
