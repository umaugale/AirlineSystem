const express = require("express");
const { registerUser, loginUser,addAirline,getAllAirlines,flightbook,getAllFlight} = require("./controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addairline",addAirline);
router.get("/getAll",getAllAirlines);
router.post("/flightBook",flightbook);
router.get("/getAllFlight",getAllFlight);

module.exports = router;
