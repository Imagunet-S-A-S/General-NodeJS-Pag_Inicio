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
  { name: "Zabbix", url: "https://172.30.109.5/zabbix", imageSrc: "/zabbix.png" },
  //{ name: "Wazuh", url: "https://demos.imagunet.com/wazuh", imageSrc: "/wazuh.png" },
  //{ name: "Airflow", url: "http://airflow.imagunet.com", imageSrc: "/airflow.png" },
  { name: "Grafana", url: "https://172.30.109.5/grafana", imageSrc: "/grafana.png" },
  //{ name: "NTOP", url: "https://demos.imagunet.com:5000/", imageSrc: "/ntop.png" },
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
          background: "linear-gradient(135deg, #ffffff 0%,  #162B4E 75%)",
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
          <Box component="img" src="/logo.png" alt="Logo" sx={{ width: isMobile ? 200 : 300, height: "auto" }} />
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