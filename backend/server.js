const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

// if (cluster.isMaster) {
//   // Fork worker processes.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("fork", (worker) => {
//     console.log(`Worker ${worker.process.pid} has been forked.`);
//   });

//   cluster.on("online", (worker) => {
//     console.log(`Worker ${worker.process.pid} is online.`);
//   });

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} has exited with code ${code}`);
//     // You can choose to fork a new worker here if needed.
//   });
// } else {
const app = require("./app");
const logger = require("./logger/index");
// const redisClient = require("./redis");

const port = process.env.PORT || 8000;

app.listen(port, (error) => {
  logger.info(`Server is running on port ${port}`);
  if (error) {
    // redisClient.quit(() => {
    // });
    logger.info("Redis client disconnected");
  }
});
// }
