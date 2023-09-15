//* root packages imports
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const session = require('express-session');

//* middlewares imports
const setHeadersOrigin = require("./middlewares/setHeadersOrigin");
const corsOrigin = require("./middlewares/corsOrigin");

//* routes imports
const experienceRoute = require("./routes/experience");
const projectRoute = require("./routes/project");


const app = express();

//* middlewares
app.use(express.urlencoded({ extended: true }));
app.use(setHeadersOrigin);
app.use(express.json());
app.use(cookieparser());
app.use(session({ secret: 'secret key', cookie: { maxAge: 60000 } }))
app.use(cors(corsOrigin));


//* routes
app.get("/", async (req, res, next) => {
  try {
    res.json({ msg: "Home Page" });
  } catch (error) {
    next(error)
  }
});

app.use("/api/experience", experienceRoute);
app.use("/api/project", projectRoute);

app.get("*", (req, res) => {
  res.send("404 not found page");
});

module.exports = app; // export the app module
