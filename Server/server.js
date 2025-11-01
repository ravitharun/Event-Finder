const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Enable CORS before defining routes
app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true,               // optional, for cookies/auth
  })
);

//  Parse JSON request bodies
app.use(express.json());

// . Connect to DB
connectDB();

// Import and use routes
const eventRoutes = require("./Routes/userRoutes");
app.use("/", eventRoutes);

// Default test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
