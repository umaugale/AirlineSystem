import React from "react";
import { Box, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WifiIcon from "@mui/icons-material/Wifi";
import MovieIcon from "@mui/icons-material/Movie";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";

const facilities = [
  { icon: <WifiIcon fontSize="large" />, title: "Free WiFi", description: "Stay connected with high-speed internet." },
  { icon: <MovieIcon fontSize="large" />, title: "In-Flight Entertainment", description: "Watch movies, listen to music, and more." },
  { icon: <RestaurantIcon fontSize="large" />, title: "Delicious Meals", description: "Enjoy gourmet meals and snacks." },
  { icon: <AirlineSeatReclineNormalIcon fontSize="large" />, title: "Comfortable Seats", description: "Extra legroom and reclining seats for your comfort." },
  { icon: <LocalOfferIcon fontSize="large" />, title: "Exclusive Offers", description: "Special discounts and offers for frequent flyers." },
];

const AirlineFacilities = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 4,
        color: "white",
      }}
    >
      {/* Back Button */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <IconButton onClick={() => navigate("/")} sx={{ color: "white" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Back to Dashboard
        </Typography>
      </Box>

      {/* Header */}
      <Box display="flex" alignItems="center" justifyContent="center" gap={2} mb={4}>
        <FlightTakeoffIcon fontSize="large" />
        <Typography variant="h4" fontWeight="bold">
          Airline Facilities
        </Typography>
      </Box>

      {/* Facilities Grid */}
      <Grid container spacing={3} justifyContent="center">
        {facilities.map((facility, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: "center", boxShadow: 3, borderRadius: 2, p: 2, background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}>
              <CardContent>
                {facility.icon}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {facility.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {facility.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AirlineFacilities;
