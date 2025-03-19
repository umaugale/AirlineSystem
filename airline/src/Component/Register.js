import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Grid,IconButton } from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Register = () => {
  const [user, setUser] = useState({
    name: "", email: "", password: "", gender: "", contact: "", age: "", street: "", city: "", pin: ""
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", user);
      
      if (response.status === 201) {
        alert("Registration Successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate("/login")} sx={{ color: "black" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Register
        </Typography>
      </Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <TextField
              label="Passenger Name"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email id"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px", ml: "1%" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Gender"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px", ml: "1%" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Contact No."
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, contact: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px", ml: "1%" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Street"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, street: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px", ml: "1%" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Pin Code"
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, pin: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" }, "& .MuiInputLabel-root": { top: -5 } }}
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
