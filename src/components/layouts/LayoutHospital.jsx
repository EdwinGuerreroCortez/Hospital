import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { Box, Container } from "@mui/material";

const LayoutHospital = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw", // Asegura que el layout ocupe todo el ancho de la ventana
      }}
    >
      <Navbar />

      {/* Contenido principal que ocupa todo el espacio restante */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          px: 2,
          py: 4,
          width: "100%",
          background: 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 100%)', // Gradiente movido aquí
        }}
      >
        <Container
          sx={{
            width: "100%",
            maxWidth: "none",
          }}
        >
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default LayoutHospital;