import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Container, TextField, Button, Typography, Box, IconButton, Alert } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BookFlight = () => {
  const [flight, setFlight] = useState({ origin: "", destination: "", date: "" });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleBooking = async () => {
    const formattedDate = moment(flight.date, "YYYY-MM-DD").format("DD-MM-YYYY"); // ✅ Convert Date
    const flightData = { 
      origin: flight.origin, 
      destination: flight.destination, 
      date: formattedDate 
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/flightbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(flightData),
      });
  
      if (response.ok) {
        alert("Flight booked successfully");
        setFlight({ origin: "", destination: "", date: "" })
      } else {
        alert("Failed to book flight");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        {/* Back Arrow & Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <IconButton onClick={() => navigate("/home")} sx={{ color: "black" }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5" fontWeight="bold">
            Book Flight
          </Typography>
        </Box>

        {/* Success/Error Message */}
        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}

        <TextField
          label="Origin"
          fullWidth
          margin="normal"
          value={flight.origin}
          onChange={(e) => setFlight({ ...flight, origin: e.target.value })}
        />
        <TextField
          label="Destination"
          fullWidth
          margin="normal"
          value={flight.destination}
          onChange={(e) => setFlight({ ...flight, destination: e.target.value })}
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={flight.date}
          onChange={(e) => setFlight({ ...flight, date: e.target.value })}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleBooking}
          disabled={!flight.origin || !flight.destination || !flight.date}
        >
          Book Now
        </Button>
      </Box>
    </Container>
  );
};

export default BookFlight;
