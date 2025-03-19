import { Container, TextField, Typography, Box, Grid } from "@mui/material";
import React, { useState } from "react";


const Contact = () => {
    const[contact,setContact] = useState({name:"",email:"",desc:""})
    const handleSubmit = () => {

    }
    return(
        <Container maxWidth="sm">
            <Box sx={{mt:5,p:3, boxShadow:3,borderRadius:2}}>
                <Typography variant="h5" gutterBottom>
                    Get in Touch
                </Typography>
                <Grid Container spacing={0}>
                    <Grid item xs={12}>
                        <TextField
                        label="Enter your name"
                        margin="normal"
                        fullWidth
                        onChange={(e) => setContact({...contact,name:e.target.value})}
                        sx={{ "& .MuiInputBase-root": { height: "40px" },"& .MuiInputLabel-root": { top: -5 }, }} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Enter your email"
                        margin="normal"
                        fullWidth
                        onChange={(e) => setContact({...contact,email:e.target.value})}
                        sx={{ "& .MuiInputBase-root": { height: "40px" },"& .MuiInputLabel-root": { top: -5 }, }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label ="Project Description"
                        margin="normal"
                        fullWidth
                        onChange={(e)=> setContact({...contact,desc:e.target.value})}
                        sx={{ "& .MuiInputBase-root": { height: "100px" },"& .MuiInputLabel-root": { top: -5 }, }}
                        />
                    </Grid>

                </Grid>
                {/* <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>Submit</Button> */}

            </Box>

        </Container>

    );

};
export default Contact;