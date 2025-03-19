import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Link,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", credentials);
      console.log("Full Response:", response);
  
      const responseData = response.data;
      console.log("Response Data:", responseData);
  
      // Fix condition to check for token instead of `success`
      if (responseData?.token) {  
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        setError(responseData?.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError("Login failed. Please check your credentials.");
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate("/dashboard")} sx={{ color: "black" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Login
        </Typography>
      </Box>
        {error && <Typography color="error">{error}</Typography>}

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/register" underline="hover">
            Register here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
