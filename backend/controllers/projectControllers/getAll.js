const prisma = require("../../prisma");
const logger = require("../../logger");


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

    return res.json({ message: "projects", status: 200, projects: projects })

  } catch (error) {
    return res.json({ message: 'server error', status: 500, error: error })
  }

}

module.exports = getAll