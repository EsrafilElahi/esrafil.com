//* root packages imports
const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const session = require('express-session');
const redisClient = require("./redis")

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


// caching
function setResponse(username, repos) {
  return `<h2>${username} has ${repos} Github repos</h2>`;
}

// Make request to Github for data
async function getRepos(req, res, next) {
  try {
    console.log('Fetching Data...');

    const { username } = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    const repos = data.public_repos;

    // Set data to Redis
    redisClient.set(username, repos, (err, reply) => {
      if (err) {
        console.error('Error caching data ------------ >:', err);
      } else {
        console.log('Data cached successfully:', reply);
      }
    });

    return res.send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
}

// Cache middleware
const cache = async (req, res, next) => {
  const { username } = req.params;
  const cachedData = await redisClient.get(username);

  if (cachedData !== null) {
    res.send(setResponse(username, cachedData));
  } else {
    next();
  }
}

//* routes
app.get('/repos/:username', cache, getRepos);

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
