//? root packages imports
const express = require("express");
const cors = require("cors");
require('dotenv').config();


//? middlewares imports
const setHeadersOrigin = require("./middlewares/setHeadersOrigin");
const corsOrigin = require("./middlewares/corsOrigin");
const { cachingExperiences, cachingProjects } = require("./middlewares/caching");

//? routes imports
const experienceRoute = require("./routes/experience");
const projectRoute = require("./routes/project");


const app = express();

//* middlewares
app.use(express.urlencoded({ extended: true }));
app.use(setHeadersOrigin);
app.use(express.json());
app.use(cors(corsOrigin));

// * routes
app.get("/", async (req, res, next) => {
  try {
    res.json({ msg: "Home Page" });
  } catch (error) {
    next(error)
  }
});

app.use("/api/experience", cachingExperiences, experienceRoute);
app.use("/api/project", cachingProjects, projectRoute);

app.get("*", (req, res) => {
  res.send("404 not found page");
});

module.exports = app; //* export the app module
