const prisma = require("../../prisma");
const redisClient = require("../../redis");
const logger = require("../../logger/index");

const getAll = async (req, res, next) => {
  try {
    const experiences = await prisma.experience.findMany({
      select: {
        id: true,
        startDate: true,
        endDate: true,
        title: true,
        description: true,
        corporation: true,
        cooperationType: true,
        projects: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    const cachedExperiences = await redisClient.get("experiences");
    const parsedExperiences = JSON.parse(cachedExperiences);
    
    console.log("experiences :", experiences);
    console.log("parsedExperiences :", parsedExperiences);

    logger.info("fetching expereiences...");

    if (parsedExperiences?.length !== experiences.length) {
      // set caching
      redisClient.set("experiences", JSON.stringify(experiences));
      const oneDay = parseInt(+new Date() / 1000) + 86400;
      redisClient.expireAt("experiences", oneDay);

      return res.json({
        message: "experiences",
        status: 200,
        experiences: experiences,
      });
    } else {
      return res.json({
        message: "experiences",
        status: 200,
        experiences: parsedExperiences,
      });
    }
  } catch (error) {
    logger.error(error);
    return res.json({ message: "server error", status: 500, error: error });
  }
};

module.exports = getAll;
