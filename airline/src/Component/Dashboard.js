import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="absolute" sx={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side - Airline Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <FlightTakeoffIcon fontSize="large" />
            <Typography variant="h6" fontWeight="bold">
              Airline System
            </Typography>
            <Button color="inherit" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => navigate("/AirlineFacilities")}>
              Facilities Provide By Us
            </Button>
          </Box>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Airline System
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your journey begins here. Book, manage, and explore flights with ease.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
