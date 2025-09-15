import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import AppButton from "./components/Button";


interface AppLink {
  name: string;
  url: string;
  imageSrc: string;
}

const apps: AppLink[] = [
  //{ name: "GLPI", url: "https://demos.imagunet.com/glpi/", imageSrc: "/glpi.png" },
  { name: "Zabbix", url: "http://172.16.0.33/zabbix", imageSrc: "/zabbix.png" },
  //{ name: "Wazuh", url: "https://demos.imagunet.com/wazuh", imageSrc: "/wazuh.png" },
  //{ name: "Airflow", url: "http://3.212.197.9:30813/home", imageSrc: "/airflow.png" },
  { name: "Grafana", url: "http://172.16.0.33/grafana", imageSrc: "/grafana.png" },
  { name: "Nagios", url: "https://10.40.6.28/nagios/", imageSrc: "/nagios.png" },
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
          background: "linear-gradient(135deg, #1f1751 0%, #ffffff 100%)",
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
          <Box component="img" src="/Logo-Onenetfibra.svg" alt="Logo" sx={{ width: isMobile ? 200 : 300, height: "auto" }} />
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 2, color: "white" }}>
            Bienvenido a la página índice 
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 1, color: "white" }}>
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