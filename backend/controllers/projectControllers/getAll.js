const prisma = require("../../prisma");
const logger = require("../../logger");


const getAll = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({});

    return res.json({ message: "projects", status: 200, projects: projects })

  } catch (error) {
    next({ status: 500, message: "server error", data: error })
  }

}

module.exports = getAll