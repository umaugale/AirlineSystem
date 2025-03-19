import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { 
  TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Table, Typography, Box, TablePagination,IconButton
} from "@mui/material";

const ViewAirline = () => {
  const [airlines, setAirlines] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5000/api/getAll")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Not getting response");
          }
          return response.json();
        })
        .then((data) => {
          setAirlines(data.airlines);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    fetchData();
  }, []);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ p: 2, backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}
      >
         <IconButton
            onClick={() => navigate("/home")}
            sx={{ color: "black", marginRight: 2 }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}>
          Airline Information
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Airline Name</TableCell>
                <TableCell>Airline Registration No</TableCell>
                <TableCell>Airline Description</TableCell>
                <TableCell>Total Seats</TableCell>
                <TableCell>Economy Seats</TableCell>
                <TableCell>Business Seats</TableCell>
                <TableCell>First Class Seats</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airlines.length > 0 ? (
                airlines
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((airline) => (
                    <TableRow 
                      key={airline.id} 
                      sx={{ "&:hover": { backgroundColor: "#bccede", cursor: "pointer" } }}
                    
                    >
                      <TableCell>{airline.name}</TableCell>
                      <TableCell>{airline.code}</TableCell>
                      <TableCell>{airline.description}</TableCell>
                      <TableCell>{airline.totalSeats}</TableCell>
                      <TableCell>{airline.economySeats}</TableCell>
                      <TableCell>{airline.businessSeats}</TableCell>
                      <TableCell>{airline.firstClassSeats}</TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    {error ? `Error: ${error}` : "No airlines found"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Controls */}
        <TablePagination
          component="div"
          count={airlines.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ViewAirline;
