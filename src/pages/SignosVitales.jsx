import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Favorite, Air, DeviceThermostat, Bloodtype } from "@mui/icons-material";

const datosVitales = [
  { fecha: "01 May", pulso: 72, respiracion: 16, temperatura: 36.8, oxigeno: 98 },
  { fecha: "05 May", pulso: 70, respiracion: 15, temperatura: 36.7, oxigeno: 97 },
  { fecha: "10 May", pulso: 74, respiracion: 17, temperatura: 36.9, oxigeno: 99 },
  { fecha: "15 May", pulso: 71, respiracion: 16, temperatura: 36.6, oxigeno: 98 },
  { fecha: "20 May", pulso: 69, respiracion: 15, temperatura: 36.8, oxigeno: 97 },
];

const SignosVitales = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        py: 6,
        px: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#0D47A1",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              📈 Monitoreo de Signos Vitales
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#1565C0", mt: 1, fontStyle: "italic" }}
            >
              Seguimiento en tiempo real de métricas de salud críticas
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Gráfico de Frecuencia Cardíaca */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Favorite sx={{ color: "#1976D2", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#1976D2" }}
                    >
                      Frecuencia Cardíaca
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={datosVitales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" />
                      <YAxis domain={[60, 80]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="pulso"
                        stroke="#1976D2"
                        name="Pulso (lpm)"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Estadísticas Rápidas */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#E8F5E9",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Bloodtype sx={{ color: "#2E7D32", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#2E7D32" }}
                    >
                      Estadísticas Rápidas
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    <strong>Pulso Promedio:</strong> 71 lpm
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    <strong>Respiración:</strong> 15.8 rpm
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    <strong>Temperatura:</strong> 36.76°C
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                    <strong>Saturación O₂:</strong> 97.8%
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Resumen de Signos Vitales */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#E3F2FD",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <DeviceThermostat sx={{ color: "#0288D1", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#0288D1" }}
                    >
                      Última Medición
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    📅 <strong>Fecha:</strong> 20 de mayo de 2025
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    💓 <strong>Pulso:</strong> 69 lpm
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    🌬️ <strong>Respiración:</strong> 15 rpm
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                    🌡️ <strong>Temperatura:</strong> 36.8°C
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                    🩺 <strong>Saturación O₂:</strong> 97%
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Tabla de Signos Vitales */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Air sx={{ color: "#1976D2", mr: 1.5, fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#1976D2" }}
                    >
                      Historial de Signos Vitales
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontSize: "1.1rem" }}>Fecha</TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>Pulso (lpm)</TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>Respiración (rpm)</TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>Temperatura (°C)</TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>Saturación O₂ (%)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {datosVitales.map((row) => (
                          <TableRow key={row.fecha}>
                            <TableCell sx={{ fontSize: "1rem" }}>{row.fecha}</TableCell>
                            <TableCell sx={{ fontSize: "1rem" }}>{row.pulso}</TableCell>
                            <TableCell sx={{ fontSize: "1rem" }}>{row.respiracion}</TableCell>
                            <TableCell sx={{ fontSize: "1rem" }}>{row.temperatura}</TableCell>
                            <TableCell sx={{ fontSize: "1rem" }}>{row.oxigeno}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignosVitales;