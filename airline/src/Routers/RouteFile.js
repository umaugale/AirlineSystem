import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../Component/Register";
import BookFlight from "../Component/BookFlight";
import AddAirline from "../Component/AddAirline";
import Login from "../Component/Login";
import Dashboard from "../Component/Dashboard";
import Contact from "../Component/Contact";
import AboutUs from "../Component/About";
import Home from "../Component/Home";
import ViewAirline from "../Component/ViewAirline";
import ViewFlight from "../Component/ViewFlight";
import AirlineFacilities from "../Component/AirlineFacilities";

const RouteFile = ({ setIsAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-flight" element={<BookFlight />} />
      <Route path="/add-airline" element={<AddAirline />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/viewAirline" element={<ViewAirline/>}/>
      <Route path="/view-flight" element={<ViewFlight/>}/>
      <Route path="/AirlineFacilities" element={<AirlineFacilities/>}/>
    </Routes>
  );
};

export default RouteFile;
