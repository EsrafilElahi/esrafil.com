const app = require("./app");
const logger = require("./logger/index");
const redisClient = require("./redis");


const port = process.env.PORT || 8000;

app.listen(port, (error) => {
  logger.info(`Server is running on port ${port}`);
  if (error) {
    redisClient.quit(() => {
      logger.info('Redis client disconnected');
    });
  }
});
