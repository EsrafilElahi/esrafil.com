const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieparser = require("cookie-parser");
// const passengerRoute = require("./routes/passenger");
const setHeadersOrigin = require("./helpers/setHeadersOrigin");

const app = express();
const port = process.env.PROJECT_PORT || 5050;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(setHeadersOrigin);
app.use(express.json());
app.use(cookieparser());
let publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));
app.use(cors());

// routes
app.get("/", async (req, res) => {
  res.json({ msg: "Home Page" });
});

// app.use("/api/passengers", passengerRoute);

// 404 page
app.get("*", (req, res) => {
  res.send("404 not found page");
});

module.exports = app; // Export the Express app
