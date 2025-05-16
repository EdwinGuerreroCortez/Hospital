import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import doctorImage from '../assets/doctor-image.png';
import {
  Event,
  MedicalInformation,
  MonitorHeart,
  LocalHospital,
} from "@mui/icons-material";

const Inicio = () => {
  const navigate = useNavigate();

  const funciones = [
    {
      titulo: "Citas",
      desc: "Agenda, reprograma o cancela tus citas fácilmente.",
      icono: <Event sx={{ fontSize: 50, color: '#1976D2' }} />
    },
    {
      titulo: "Diagnóstico",
      desc: "Consulta tus diagnósticos médicos actualizados.",
      icono: <MedicalInformation sx={{ fontSize: 50, color: '#388E3C' }} />
    },
    {
      titulo: "Signos Vitales",
      desc: "Monitorea tu presión, frecuencia y más.",
      icono: <MonitorHeart sx={{ fontSize: 50, color: '#D32F2F' }} />
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Texto animado */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  color: '#1E1E1E',
                  marginBottom: 2,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                }}
              >
                Automatiza la Salud
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: '#424242',
                  marginBottom: 4,
                  maxWidth: '500px',
                }}
              >
                Una plataforma de autoservicio para equipos médicos ocupados que desean optimizar la atención.
              </Typography>

            </motion.div>
          </Grid>

          {/* Imagen animada */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={doctorImage}
                  alt="Doctor"
                  onError={(e) => {
                    console.error("Error al cargar la imagen:", e);
                    e.target.src = "https://via.placeholder.com/500x375?text=Imagen+No+Disponible";
                  }}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Sección inferior con cuadros informativos */}
        <Box mt={6}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            Funciones principales
          </Typography>
          <Grid container spacing={3}>
            {funciones.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ display: 'flex' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ flexGrow: 1, width: '100%' }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 3,
                      padding: 3,
                      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                      textAlign: 'center',
                      height: '100%',
                      minHeight: 240,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{item.icono}</Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      {item.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Inicio;
