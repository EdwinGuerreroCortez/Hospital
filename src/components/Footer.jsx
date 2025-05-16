import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0077b6",
        color: "#ffffff",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © 2025 La salud está en tus manos. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
