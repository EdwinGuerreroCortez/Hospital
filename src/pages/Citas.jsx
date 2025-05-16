import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const Citas = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#0D47A1', mb: 4 }}
          >
            📋 Mis Citas Médicas
          </Typography>
        </motion.div>

        {/* Próxima cita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            sx={{
              mb: 4,
              borderRadius: 4,
              boxShadow: 4,
              backgroundColor: '#FFFFFF',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#1976D2', mb: 1 }}
              >
                Próxima cita:
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" gutterBottom>
                📅 <strong>25 de mayo de 2025</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                🕒 <strong>10:30 AM</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                🏥 <strong>Consultorio</strong>
              </Typography>
              <Typography variant="body1">
                📌 Calle Hidalgo #123, Monterrey, N.L.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Última cita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card
            sx={{
              mb: 4,
              borderRadius: 4,
              boxShadow: 2,
              backgroundColor: '#FAFAFA',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#388E3C', mb: 1 }}
              >
                Última cita:
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" gutterBottom>
                📅 <strong>10 de mayo de 2025</strong>
              </Typography>
              <Typography variant="body1">
                📝 Motivo: Cita
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Si deseas agendar una nueva cita o necesitas cambiar tu cita actual,
            comunícate con nosotros.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Citas;
