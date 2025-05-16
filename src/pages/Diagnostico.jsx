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
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";
import { MonitorHeart, LocalHospital, TrendingUp } from "@mui/icons-material";

const datosPresion = [
  { fecha: "01 May", sistolica: 130, diastolica: 85 },
  { fecha: "05 May", sistolica: 128, diastolica: 82 },
  { fecha: "10 May", sistolica: 125, diastolica: 80 },
  { fecha: "15 May", sistolica: 122, diastolica: 78 },
  { fecha: "20 May", sistolica: 120, diastolica: 76 },
];

const datosFrecuentes = [
  { diagnostico: "Hipertensión", casos: 8 },
  { diagnostico: "Diabetes", casos: 5 },
  { diagnostico: "Gripe", casos: 4 },
];

const Diagnostico = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        py: 6,
        px: 2,
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
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0D47A1",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              🩺 Panel de Diagnóstico Médico
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#1565C0", mt: 1, fontStyle: "italic" }}
            >
              Monitoreo y análisis de salud en tiempo real
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Gráfico de Presión Arterial */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <MonitorHeart sx={{ color: "#1976D2", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#1976D2" }}
                    >
                      Presión Arterial
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={datosPresion}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" />
                      <YAxis domain={[60, 140]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sistolica"
                        stroke="#1976D2"
                        name="Sistólica"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="diastolica"
                        stroke="#388E3C"
                        name="Diastólica"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Gráfico de Diagnósticos Frecuentes */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocalHospital sx={{ color: "#0288D1", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#0288D1" }}
                    >
                      Diagnósticos Frecuentes
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={datosFrecuentes}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="diagnostico" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="casos"
                        fill="#0288D1"
                        barSize={40}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Quick Stats Card */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#E8F5E9",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TrendingUp sx={{ color: "#2E7D32", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#2E7D32" }}
                    >
                      Estadísticas Rápidas
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Presión Promedio:</strong> 124/80 mmHg
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Total Diagnósticos:</strong> 17 casos
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Última Medición:</strong> 20 May 2025
                  </Typography>
                  <Typography variant="body1">
                    <strong>Estado:</strong> Estable
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Tabla de Presión Arterial */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translate ry(-5px)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 2, color: "#1976D2" }}
                  >
                    Historial de Presión Arterial
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Fecha</TableCell>
                          <TableCell>Sistólica (mmHg)</TableCell>
                          <TableCell>Diastólica (mmHg)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {datosPresion.map((row) => (
                          <TableRow key={row.fecha}>
                            <TableCell>{row.fecha}</TableCell>
                            <TableCell>{row.sistolica}</TableCell>
                            <TableCell>{row.diastolica}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Resumen Final */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#F1F8E9",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 2, color: "#2E7D32" }}
                  >
                    🩺 Último Diagnóstico: Hipertensión Controlada
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    📅 <strong>Fecha:</strong> 20 de mayo de 2025
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    💊 <strong>Recomendación:</strong> Continuar tratamiento, reducir
                    consumo de sal, realizar caminatas diarias de 30 minutos.
                  </Typography>
                  <Typography variant="body1">
                    🩺 <strong>Estado:</strong> Monitoreo continuo recomendado.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Diagnostico;