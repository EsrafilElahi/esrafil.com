const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const session = require('express-session')
const experienceRoute = require("./routes/experience");
const handleErrors = require("./middlewares/handleErrors")
const setHeadersOrigin = require("./middlewares/setHeadersOrigin");
const corsOrigin = require("./middlewares/corsOrigin");

const app = express();
const port = process.env.PROJECT_PORT || 5050;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(setHeadersOrigin);
app.use(handleErrors);
app.use(express.json());
app.use(cookieparser());
app.use(session({ secret: 'secret key', cookie: { maxAge: 60000 } }))
app.use(cors(corsOrigin));

// let publicDir = path.join(__dirname, "public");
// app.use(express.static(publicDir));

// routes
app.get("/", async (req, res, next) => {
  try {
    res.json({ msg: "Home Page" });
  } catch (error) {
    next(error)
  }
});

app.use("/api/experience", experienceRoute);

// 404 page
app.get("*", (req, res) => {
  res.send("404 not found page");
});

module.exports = app; // Export the Express app
