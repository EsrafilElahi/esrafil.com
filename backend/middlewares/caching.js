const redisClient = require("../redis");
const logger = require("../logger/index");

const cachingExperiences = async (req, res, next) => {
  const cachedData = await redisClient.get("experiences");

  if (cachedData !== null) {
    logger.info("cached data experiences...");

    return res.json({ message: "experiences", status: 200, experiences: cachedData })
  } else {
    next()
  }

}

const cachingProjects = async (req, res, next) => {
  const cachedData = await redisClient.get("projects");

  if (cachedData !== null) {
    logger.info("cached data projects...");

    return res.json({ message: "projects", status: 200, projects: cachedData })
  } else {
    next()
  }

}

module.exports = { cachingExperiences, cachingProjects };