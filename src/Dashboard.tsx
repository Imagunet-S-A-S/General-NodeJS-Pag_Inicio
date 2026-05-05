import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import AppButton from "./components/Button";


interface AppLink {
  name: string;
  url: string;
  imageSrc: string;
}

const apps: AppLink[] = [
  { name: "Zabbix", url: "http://10.81.11.137/zabbix", imageSrc: "/zabbix.png" },
  { name: "Grafana", url: "http://10.81.11.137/grafana", imageSrc: "/grafana.png" },
];

const Dashboard: React.FC = () => {
    useEffect(() => {
      document.title = "Monitoreo - Panel de Aplicaciones";
    }, []);
  
    // Detectar si la pantalla es pequeña
    const isMobile = useMediaQuery("(max-width:600px)");
  
    return (
      <Box
        sx={{
          background: "linear-gradient(100deg, #ffffff 0%, #375fca 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Cambia el layout en móviles
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? 2 : 4,
          textAlign: "center",
        }}
      >
        {/* Logo y Mensaje */}
        <Box sx={{ width: isMobile ? "100%" : "40%", mb: isMobile ? 3 : 0 }}>
          <Box component="img" src="/Logo InterNexa RGB-Fondos Claros.png" alt="Logo" sx={{ width: isMobile ? 200 : 300, height: "auto" }} />
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 2, color: "black" }}>
            Bienvenido a la página índice 
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 1, color: "black" }}>
            Seleccione una de las siguientes opciones:
          </Typography>
        </Box>
  
        {/* Panel de Botones Adaptable */}
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 4, backgroundColor: "#E0E0E0" }}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color: "#333" }}>
              Panel de Aplicaciones
            </Typography>
            <Grid 
              container 
              spacing={2} 
              justifyContent="center"
            >
              {apps.map((app) => (
                <Grid 
                  item 
                  xs={isMobile ? 6 : 4} // En móviles: 2 columnas, en escritorio: 3 columnas
                  key={app.name}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <AppButton text={app.name} url={app.url} imageSrc={app.imageSrc} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>
    );
  };
  
  export default Dashboard;