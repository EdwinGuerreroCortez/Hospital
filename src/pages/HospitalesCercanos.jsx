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
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { LocalHospital, Phone } from "@mui/icons-material";

const hospitalesData = [
  { name: "Clínica Esperanza", address: "Av. Principal 123, Ciudad", distance: 2.5, phone: "555-0123" },
  { name: "Hospital San Rafael", address: "Calle Salud 456, Ciudad", distance: 4.8, phone: "555-0456" },
  { name: "Centro Médico Vida", address: "Paseo Central 789, Ciudad", distance: 3.2, phone: "555-0789" },
  { name: "Hospital del Sol", address: "Ruta Norte 101, Ciudad", distance: 6.1, phone: "555-1011" },
  { name: "Clínica Aurora", address: "Av. Libertad 234, Ciudad", distance: 1.9, phone: "555-1234" },
  { name: "Hospital Buen Samaritano", address: "Calle Paz 567, Ciudad", distance: 5.3, phone: "555-5678" },
  { name: "Centro Salud Integral", address: "Blvd. Esperanza 890, Ciudad", distance: 4.0, phone: "555-8901" },
  { name: "Hospital Nuevo Horizonte", address: "Ruta Sur 112, Ciudad", distance: 7.2, phone: "555-1122" },
];

const HospitalesCercanos = () => {
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
              🏥 Hospitales Cercanos
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#1565C0", fontStyle: "italic" }}
            >
              Encuentra los centros médicos más cercanos a ti
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
          {/* Estadísticas Rápidas */}
          <Grid item xs={12} md={4} lg={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#E8F5E9",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        justifyContent: "flex-start",
                      }}
                    >
                      <LocalHospital sx={{ color: "#2E7D32", mr: 1.5, fontSize: 32 }} />
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#2E7D32" }}
                      >
                        Estadísticas
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3 }} />
                    <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      <strong>Total Hospitales:</strong> 8
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      <strong>Distancia Promedio:</strong> 4.38 km
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      <strong>Más Cercano:</strong> Clínica Aurora (1.9 km)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Lista de Hospitales */}
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
                    <LocalHospital sx={{ color: "#0288D1", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#0288D1" }}
                    >
                      Lista de Hospitales Cercanos
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
                    {hospitalesData.map((hospital) => (
                      <Grid item xs={12} sm={6} md={3} key={hospital.name}>
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
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#0D47A1", mb: 1.5 }}
                              >
                                {hospital.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "#1565C0", mb: 1, fontSize: "0.95rem" }}
                              >
                                <strong>Dirección:</strong> {hospital.address}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "#1565C0", mb: 1, fontSize: "0.95rem" }}
                              >
                                <strong>Distancia:</strong> {hospital.distance} km
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                mt: 2,
                              }}
                            >
                              <IconButton
                                sx={{ color: "#2E7D32", mr: 1 }}
                                onClick={() => window.open(`tel:${hospital.phone}`)}
                              >
                                <Phone />
                              </IconButton>
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
                                onClick={() => window.open(`tel:${hospital.phone}`)}
                              >
                                Contactar
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

export default HospitalesCercanos;