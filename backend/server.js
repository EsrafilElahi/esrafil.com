const app = require("./app");
const logger = require("./logger/index");


const port = process.env.PORT || 8000;

app.listen(port, (error) => {
  logger.info(`Server is running on port ${port}`);
  if (error) {
    redisClient.quit(() => {
      console.log('Redis client disconnected');
    });
  }
});
