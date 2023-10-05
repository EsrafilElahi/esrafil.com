const redisClient = require("../redis");
const logger = require("../logger/index");

const cachingExperiences = async (req, res, next) => {
  try {
    const cachedData = await redisClient.get("experiences");
    const parsedData = JSON.parse(cachedData);

    if (parsedData?.length > 0) {
      logger.info("Cached data experiences...");
      return res.json({
        message: "experiences",
        status: 200,
        experiences: parsedData,
      });
    } else {
      // If data is not found in the cache, proceed to the next middleware or route handler.
      next();
    }
  } catch (error) {
    // Handle Redis fetch error
    logger.error("Error fetching experiences from cache:", error);
    next(error); // Pass the error to the error handling middleware
  }
};

const cachingProjects = async (req, res, next) => {
  try {
    const cachedData = await redisClient.get("projects");
    const parsedData = JSON.parse(cachedData);

    if (parsedData?.length > 0) {
      logger.info("Cached data projects...");
      return res.json({
        message: "projects",
        status: 200,
        projects: parsedData,
      });
    } else {
      // If data is not found in the cache, proceed to the next middleware or route handler.
      next();
    }
  } catch (error) {
    // Handle Redis fetch error
    logger.error("Error fetching projects from cache:", error);
    next(error); // Pass the error to the error handling middleware
  }
};

module.exports = { cachingExperiences, cachingProjects };
