const prisma = require("../../prisma");
const redisClient = require("../../redis");
const logger = require("../../logger/index");

const getAll = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        link: true,
        description: true,
        image: true,
        technologies: {
          select: {
            id: true,
            name: true,
          },
        },
        experience: {
          select: {
            id: true,
            title: true,
            description: true,
          },
        },
      },
    });

    const cachedProjects = await redisClient.get("projects");
    const parsedProjects = JSON.parse(cachedProjects);

    console.log("projects :", projects);
    console.log("parsedProjects :", parsedProjects);

    logger.info("fetching projects...");

    if (parsedProjects?.length !== projects.length) {
      // set caching
      redisClient.set("projects", JSON.stringify(projects));
      const oneDay = parseInt(+new Date() / 1000) + 86400;
      redisClient.expireAt("projects", oneDay);

      return res.json({ message: "projects", status: 200, projects: projects });
    } else {
      return res.json({
        message: "projects",
        status: 200,
        projects: parsedProjects,
      });
    }
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error });
  }
};

module.exports = getAll;
