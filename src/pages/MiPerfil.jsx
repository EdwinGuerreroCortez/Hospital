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
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  AccountCircle,
  Cake,
  Home,
  LocalHospital,
  Event,
  ContactPhone,
  Notifications,
  ExitToApp,
} from "@mui/icons-material";

const userData = {
  nombre: "Martha Hernández",
  edad: 65,
  genero: "Femenino",
  fechaNacimiento: "15/03/1991",
  email: "martha.hernandez@gmail.com",
  telefono: "+1 555-123-4567",
  direccion: "Av. Principal 123, Ciudad",
  alergias: ["Polen", "Penicilina"],
  condiciones: ["Hipertensión", "Diabetes Tipo 2"],
  tipoSangre: "A+",
  medicamentos: ["Metformina", "Losartán"],
  citasRecientes: [
    { fecha: "16/05/2025 10:00 AM", tipo: "Consulta Cardiología" },
    { fecha: "18/05/2025 2:00 PM", tipo: "Análisis de Sangre" },
  ],
  contactosEmergencia: [
    { nombre: "María Pérez", telefono: "+1 555-987-6543" },
    { nombre: "Carlos López", telefono: "+1 555-456-7890" },
  ],
  notificaciones: 3,
  ultimaActualizacion: "15/05/2025 11:35 PM CST",
};

const PerfilUsuario = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        py: 6,
        px: 3,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Header with Profile Picture */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  justifyContent: "center",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: { xs: 2, md: 0 },
                    mr: { md: 4 },
                  }}
                >
                  <img
                    src="https://imgs.search.brave.com/huoGZ5O8cZiEp_Ca43M94NgtVTSehPFksu-JSy0xHYQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NjIwMTc3OC9lcy9m/b3RvL2ZlbGl6LW11/amVyLW1heW9yLXNv/bnJpZW5kby1lbi1j/YXNhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1scDdycVdn/ZzZBU2FGZHpjekls/aVJLSXo4OWkwcFpk/ZkZOX01lWFpTaXdZ/PQ"
                    alt="Perfil"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#0D47A1", mb: 1 }}
                  >
                    {userData.nombre}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#1565C0", fontStyle: "italic" }}
                  >
                    Última actualización: {userData.ultimaActualizacion}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 4 }} />

              {/* Sections */}
              <Grid container spacing={4}>
                {/* Personal Information */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#2E7D32", mb: 2 }}
                  >
                    <AccountCircle sx={{ mr: 1, verticalAlign: "middle" }} /> Información
                    Personal
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <Cake sx={{ mr: 1, verticalAlign: "middle" }} /> Edad: {userData.edad}{" "}
                    años (Nac.: {userData.fechaNacimiento})
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <Home sx={{ mr: 1, verticalAlign: "middle" }} /> Género:{" "}
                    {userData.genero}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <Home sx={{ mr: 1, verticalAlign: "middle" }} /> Dirección:{" "}
                    {userData.direccion}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <AccountCircle sx={{ mr: 1, verticalAlign: "middle" }} /> Email:{" "}
                    {userData.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <AccountCircle sx={{ mr: 1, verticalAlign: "middle" }} /> Teléfono:{" "}
                    {userData.telefono}
                  </Typography>
                </Grid>

                {/* Medical History */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#0288D1", mb: 2 }}
                  >
                    <LocalHospital sx={{ mr: 1, verticalAlign: "middle" }} /> Historial
                    Médico
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <LocalHospital sx={{ mr: 1, verticalAlign: "middle" }} /> Alergias:{" "}
                    {userData.alergias.length > 0
                      ? userData.alergias.join(", ")
                      : "Ninguna registrada"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <LocalHospital sx={{ mr: 1, verticalAlign: "middle" }} /> Condiciones:{" "}
                    {userData.condiciones.length > 0
                      ? userData.condiciones.join(", ")
                      : "Ninguna registrada"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <LocalHospital sx={{ mr: 1, verticalAlign: "middle" }} /> Tipo de
                    Sangre: {userData.tipoSangre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0", mb: 1 }}>
                    <LocalHospital sx={{ mr: 1, verticalAlign: "middle" }} /> Medicamentos:{" "}
                    {userData.medicamentos.length > 0
                      ? userData.medicamentos.join(", ")
                      : "Ninguno registrado"}
                  </Typography>
                </Grid>

                {/* Appointments */}
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#0288D1", mb: 2, mt: 4 }}
                  >
                    <Event sx={{ mr: 1, verticalAlign: "middle" }} /> Citas Recientes
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {userData.citasRecientes.map((cita, index) => (
                    <Chip
                      key={index}
                      label={`${cita.fecha} - ${cita.tipo}`}
                      sx={{ mr: 1, mb: 1, backgroundColor: "#E8F5E9", color: "#2E7D32" }}
                    />
                  ))}
                </Grid>

                {/* Emergency Contacts */}
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#0288D1", mb: 2, mt: 4 }}
                  >
                    <ContactPhone sx={{ mr: 1, verticalAlign: "middle" }} /> Contactos de
                    Emergencia
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {userData.contactosEmergencia.map((contacto, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{ color: "#1565C0", mb: 1 }}
                    >
                      <ContactPhone sx={{ mr: 1, verticalAlign: "middle" }} />{" "}
                      {contacto.nombre} - {contacto.telefono}
                    </Typography>
                  ))}
                </Grid>

                {/* Actions */}
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#0288D1", mb: 2, mt: 4 }}
                  >
                    <Notifications sx={{ mr: 1, verticalAlign: "middle" }} /> Acciones
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Chip
                      label={`${userData.notificaciones} Notificaciones`}
                      sx={{
                        backgroundColor: "#E3F2FD",
                        color: "#0D47A1",
                        fontWeight: "bold",
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#2E7D32",
                        "&:hover": { backgroundColor: "#27632A" },
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "1rem",
                        px: 3,
                        py: 1,
                      }}
                      onClick={() => alert("Ver notificaciones")}
                    >
                      Ver Notificaciones
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#D32F2F",
                        "&:hover": { backgroundColor: "#B71C1C" },
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "1rem",
                        px: 3,
                        py: 1,
                      }}
                      onClick={() => alert("Cerrar sesión")}
                    >
                      <ExitToApp sx={{ mr: 1 }} /> Cerrar Sesión
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PerfilUsuario;