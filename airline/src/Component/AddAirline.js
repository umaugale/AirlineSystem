
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Grid,IconButton } from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const AddAirline = () => {
  const [airline, setAirline] = useState({ name: "", code: "",desc:"",seat:"",eseat:"",bseat:"",fseat:"" });
  const navigate = useNavigate();
  const handleAddAirline = async() => {
    try{
      const response  =await axios.post("http://localhost:5000/api/addairline",airline);
      if(response.status === 201){
        alert("Airline Added successfully");
      }
    } catch(error){
      console.error("Addition failed",error);
      alert(error.response?.data?.message || "Addition failed. Try again.");
    }

  };

  return (
    <Container maxWidth="md">
      
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate("/home")} sx={{ color: "black" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Add New Airline
        </Typography>
      </Box>
        <Grid container spacing={0}> 
          <Grid item xs={6}>  
            <TextField
              label="Airline Name"
              margin="normal"
              fullWidth
              onChange={(e) => setAirline({ ...airline, name: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" },"& .MuiInputLabel-root": { top: -5 }, }} 
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Airline Registration No"
              margin="normal"
              fullWidth
              onChange={(e) => setAirline({ ...airline, code: e.target.value })}
              sx={{ "& .MuiInputBase-root": { height: "40px" ,ml:"1%"},"& .MuiInputLabel-root": { top: -5 }, }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            label="Airline Description"
            margin="normal"
            fullWidth
            onChange={(e) => setAirline({...airline,description:e.target.value})}
            sx={{ "& .MuiInputBase-root": { height: "40px" },"& .MuiInputLabel-root": { top: -5 }, }} 
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
              label="Total Seat"
              margin="normal"
              fullWidth
              onChange={(e) => setAirline({...airline,totalSeats:e.target.value})}
              sx={{ "& .MuiInputBase-root": { height: "40px"},"& .MuiInputLabel-root": { top: -5 }, }} 
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
              label="Total Economy Seat"
              margin="normal"
              fullWidth
              onChange={(e)=>setAirline({...airline,economySeats:e.target.value})}
              sx={{ "& .MuiInputBase-root": { height: "40px" ,ml:"1%"},"& .MuiInputLabel-root": { top: -5 }, }} 
              />
            </Grid>
            <Grid item xs ={6}>
              <TextField
              label="Total Business Seat"
              margin="normal"
              fullWidth
              onChange={(e)=> setAirline({...airline,businessSeats:e.target.value})}
              sx={{ "& .MuiInputBase-root": { height: "40px"},"& .MuiInputLabel-root": { top: -5 }, }} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
              label="Total First Class Seat"
              margin="normal"
              fullWidth
              onChange={(e) => setAirline({...airline,firstClassSeats:e.target.value})}
              sx={{ "& .MuiInputBase-root": { height: "40px", ml:"1%"},"& .MuiInputLabel-root": { top: -5 }, }}  
              />
            </Grid>
          </Grid>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAddAirline}>
          Add Airline
        </Button>
      </Box>
    </Container>
  );
};

export default AddAirline;

