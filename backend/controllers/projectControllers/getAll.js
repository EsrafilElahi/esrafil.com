const prisma = require("../../prisma");
const redisClient = require("../../redis")
const logger = require("../../logger/index");


const getAll = async (req, res, next) => {
  try {

    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        link: true,
        description: true,
        technologies: {
          select: {
            id: true,
            name: true
          }
        },
        experience: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      }
    });

    logger.info("fetching projects...");

    // set caching
    redisClient.set('projects', JSON.stringify(projects));
    const oneDay = parseInt((+new Date) / 1000) + 86400
    redisClient.expireAt("projects", oneDay)

    return res.json({ message: "projects", status: 200, projects: projects })

  } catch (error) {
    return res.json({ message: 'server error', status: 500, error: error })
  }

}

module.exports = getAll