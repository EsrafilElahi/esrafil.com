const prisma = require("../../prisma");
const logger = require("../../logger");


const getAll = async (req, res, next) => {
  try {
    const experiences = await prisma.experience.findMany({});

    return res.json({ message: "experiences", status: 200, experiences: experiences })

  } catch (error) {
    next({ status: 500, message: "server error", data: error })
  }

}

module.exports = getAll