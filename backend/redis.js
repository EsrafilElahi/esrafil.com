const redis = require('redis');
const logger = require('./logger/index');

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient(REDIS_PORT);

redisClient.on('error', (error) => logger.error(`Error: ${error}`));

redisClient.connect()

module.exports = redisClient; // Export the Redis client directly
