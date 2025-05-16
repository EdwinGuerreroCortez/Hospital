import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { Box, Container } from "@mui/material";

// Add a global style reset to remove default browser margins and paddings
const GlobalStyles = () => (
  <style>
    {`
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden; /* Prevent horizontal scrollbar */
      }
      #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    `}
  </style>
);

const LayoutHospital = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          margin: 0, // Ensure no margins
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
            px: 0,
            py: 0, // Remove vertical padding as well
            width: "100%",
            background: 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 100%)',
          }}
        >
          <Container
            sx={{
              width: "100%",
              maxWidth: "100%",
              padding: 0,
              margin: 0, // Ensure no margins
            }}
          >
            {children}
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default LayoutHospital;