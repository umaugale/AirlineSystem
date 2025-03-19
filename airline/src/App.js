import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import RouteFile from "./Routers/RouteFile";
import Image from "./Images/airline5.jpg";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Router>
        <RouteFile setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </Box>
  );
};

export default App;
