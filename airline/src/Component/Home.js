import React from "react";
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import airlineImage from "../Images/airline5.jpg";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <AppBar position="absolute" sx={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar>
          <IconButton
            onClick={() => navigate("/dashboard")}
            sx={{ color: "white", marginRight: 2 }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, color: "white", textAlign: "center" }}>
            Airline Reservation System
          </Typography>

          <Button color="inherit" onClick={() => navigate("/viewAirline")}>View Airline</Button>
          <Button color="inherit" onClick={() => navigate("/add-airline")}>Add Airline</Button>
          <Button color="inherit" onClick={() => navigate("/add-flight")}>Add Flight</Button>
          <Button color="inherit" onClick={() => navigate("/view-flight")}>View Flight</Button>
        </Toolbar>
      </AppBar>

      {/* Background Image */}
      <Card
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardCover sx={{ width: "100%", height: "100%" }}>
          <img
            src={airlineImage}
            loading="lazy"
            alt="Airline"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </CardCover>
        <CardContent>
          <Typography
            level="h3"
            textColor="#fff"
            sx={{ fontWeight: "bold", textAlign: "center", mt: { xs: 10, sm: 18 } }}
          >
            
                      </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
