const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth")

module.exports=app;

// initialise cors
app.use(cors());

// Json
app.use(express.json());

// ROUTES
app.use("/api/v1/auth", authRoute )