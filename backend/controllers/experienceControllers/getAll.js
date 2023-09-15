const prisma = require("../../prisma");


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
          }
        }
      },
    });

    return res.json({ message: "experiences", status: 200, experiences: experiences })

  } catch (error) {
    return res.json({ message: 'server error', status: 500, error: error })
  }

}

module.exports = getAll