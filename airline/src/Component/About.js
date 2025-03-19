import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {IconButton} from "@mui/material"

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <IconButton onClick={() => navigate("/dashboard")} sx={{ color: "black" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Back to Dashboard
        </Typography>
      </Box>

        <Typography variant="body1" paragraph>
          Welcome to <strong>Airline Reservation System</strong>, your trusted partner for seamless flight booking experiences. 
          Our platform is designed to provide travelers with <strong>efficient, secure, and user-friendly</strong> flight reservations.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
          ✈️ Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to simplify air travel by offering a <strong>fast, reliable, and hassle-free</strong> booking experience. 
          We aim to connect passengers with airlines worldwide while ensuring the best prices and convenience.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
          🌍 Why Choose Us?
        </Typography>
        <Typography variant="body1">
          ✅ <strong>Easy-to-use</strong> interface for flight booking  
          ✅ <strong>Secure payment</strong> and instant ticket confirmation  
          ✅ <strong>Wide range</strong> of airlines and destinations  
          ✅ <strong>24/7 customer support</strong> for all your travel needs  
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
          📞 Contact Us
        </Typography>
        <Typography variant="body1">
          For inquiries, support, or feedback, feel free to reach out to us at:  
          <strong>Email:</strong> support@airlinebooking.com  
          <strong> Phone:</strong> +91 7620524685 
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
