const prisma = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment"); // Import moment.js


exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, gender, contact, age, street, city, pin } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        gender,
        contact,
        age: parseInt(age),
        street,
        city,
        pin,
      },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.addAirline = async (req, res) => {
  try {
    const { name, code, description, totalSeats, economySeats, businessSeats, firstClassSeats } = req.body;
    const existingAirline = await prisma.airline.findUnique({
      where: { code }, 
    });

    if (existingAirline) {
      return res.status(400).json({ message: "Airline with this code already exists" });
    }

    // 🔹 Create a new airline
    const airline = await prisma.airline.create({
      data: {
        name,
        code,
        description,
        totalSeats: parseInt(totalSeats, 10),  // ✅ Convert to integer
        economySeats: parseInt(economySeats, 10),
        businessSeats: parseInt(businessSeats, 10),
        firstClassSeats: parseInt(firstClassSeats, 10),
      },
    });

    res.status(201).json({ message: "Airline added successfully", airline });
  } catch (error) {
    console.error("Error adding airline:", error); // Log error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllAirlines = async(req,res) => {

  try {
    const airlines = await prisma.airline.findMany();
    res.status(200).json({ message: "All airlines fetched successfully", airlines});
  }
  catch(error){
    console.error("Error fetching airlines:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.flightbook = async (req, res) => {
  try {
    const { origin, destination, date } = req.body;

    // Convert DD-MM-YYYY to ISO-8601 format
    const formattedDate = moment(date, "DD-MM-YYYY").toISOString();

    const flight = await prisma.flightBooking.create({
      data: {
        origin,
        destination,
        date: formattedDate, // Store ISO-8601 format in DB
      },
    });

    res.status(201).json({ message: "Flight booked successfully", flight });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.getAllFlight = async(req,res)=>{
  try{
    const flights = await prisma.flightBooking.findMany();
    const formattedFlights = flights.map(flight => ({
      ...flight,
      date: moment(flight.date).format("DD-MM-YYYY"), // Convert back
    }));
    res.status(200).json({ message: "All flights fetched successfully", flights: formattedFlights });
  }

  catch(error){
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}



