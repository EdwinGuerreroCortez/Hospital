import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { People } from "@mui/icons-material";

const doctoresData = [
  {
    nombre: "Dr. Juan Pérez",
    especialidad: "Cardiología",
    imagen: "https://imgs.search.brave.com/QWGruHRM8jdsidGM_z0Pi6Idi6UfLyCp5B1cq8Vx95E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/aW50ZW50by1zZXIt/bWVqb3ItZG9jdG9y/XzMyOTE4MS0yMTg4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
  },
  {
    nombre: "Dr. Mario Gómez",
    especialidad: "Endocrinología",
    imagen: "https://imgs.search.brave.com/0PO7Og1U_YdVxEU2CNoLQXH4zLgGOcZSEhAMueqjF24/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9kb2N0b3ItdGVu/aWVuZG8tYnVlbmFz/LW5vdGljaWFzLXN1/LXBhY2llbnRlXzEz/MzM5LTE5MzY3OC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw",
  },
  {
    nombre: "Dr. Carlos Ruiz",
    especialidad: "Neurología",
    imagen: "https://imgs.search.brave.com/M8k4kskK-LJB24fRUhgM5CHnIjb4CfJKix31mCY6EAI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/MjEwNTk1MC9lcy9m/b3RvL20lQzMlQTlk/aWNvLW1hc2N1bGlu/by1zb3N0ZW5pZW5k/by1lbC1wZW5zYW1p/ZW50by1kZS1sYS1i/YXJiaWxsYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9eThG/bmpiTzdvYmZSVGtL/MnBIenluYnNuelpC/OXBxRUxnYnFjaFZ3/d1B2VT0",
  },
  {
    nombre: "Dr. Pedro López",
    especialidad: "Dermatología",
    imagen: "https://imgs.search.brave.com/vZWfUl0BuKTkBtD2xvlYw-UqDtteMyX2qmIiTv3MGDQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yZXRyYXRvLWRv/Y3Rvci1zb25yaWVu/dGUtcGllLWJyYXpv/cy1jcnV6YWRvc18x/MDc0MjAtNzUzMTUu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA",
  },
  {
    nombre: "Dr. Luis Martínez",
    especialidad: "Ortopedia",
    imagen: "https://imgs.search.brave.com/2dIlWwNaubuBR8728fXjG9_bn1xgkdXvufUkzxNq4B0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yZXRyYXRvLWRv/Y3Rvci1ob21icmUt/cGFyYWRvLXBhc2ls/bG9fMTA3NDIwLTcy/MTE0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
  },
  {
    nombre: "Dr. Jesus Ramírez",
    especialidad: "Pediatría",
    imagen: "https://imgs.search.brave.com/km8fl9YvX60qJif1XNXQFj1pW81D8akBz9-iZyEWdik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkw/NTc5NDY3L2VzL2Zv/dG8vZG9jdG9yLWpv/dmVuLXBlbnNhbmRv/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1EOXQ1V1h1cTFy/UXpKVmhTWFJjNGF2/SzZzNS1yLUYtc0xs/aVZHZFBuUEtrPQ",
  },
];

const Referencias = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        py: 8,
        px: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#0D47A1",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                mb: 1,
              }}
            >
              📋 Referencias Médicas
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#1565C0", fontStyle: "italic" }}
            >
              Conoce a nuestros doctores especializados
            </Typography>
          </Box>
        </motion.div>

        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >

          {/* Galería de Doctores */}
          <Grid item xs={12} md={8} lg={9}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  minHeight: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      justifyContent: "flex-start",
                    }}
                  >
                    <People sx={{ color: "#0288D1", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#0288D1" }}
                    >
                      Nuestros Doctores
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      alignItems: "stretch",
                    }}
                  >
                    {doctoresData.map((doctor, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                          sx={{
                            borderRadius: 4,
                            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                            backgroundColor: "#F9FAFB",
                            minHeight: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 2,
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={doctor.imagen}
                                alt={doctor.nombre}
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/150?text=Imagen+No+Disponible";
                                }}
                                style={{
                                  width: "100%",
                                  height: "150px",
                                  objectFit: "cover",
                                  borderRadius: "4px 4px 0 0",
                                }}
                              />
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#0D47A1", mt: 2, mb: 1 }}
                              >
                                {doctor.nombre}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "#1565C0", mb: 1, fontSize: "0.95rem" }}
                              >
                                <strong>Especialidad:</strong> {doctor.especialidad}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mt: 2,
                              }}
                            >
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#2E7D32",
                                  "&:hover": { backgroundColor: "#27632A" },
                                  textTransform: "none",
                                  borderRadius: 3,
                                  fontSize: "0.9rem",
                                  px: 2,
                                  py: 0.5,
                                }}
                                onClick={() => alert(`Perfil de ${doctor.nombre}`)}
                              >
                                Ver Perfil
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Referencias;