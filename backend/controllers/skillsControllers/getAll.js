const prisma = require("../../prisma");
const redisClient = require("../../redis");
const logger = require("../../logger/index");

const getAll = async (req, res, next) => {
  try {
    const skills = await prisma.technology.findMany({
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    const cachedSkills = await redisClient.get("skills");
    const parsedSkills = JSON.parse(cachedSkills);

    console.log("skills :", skills);
    console.log("parsedSkills :", parsedSkills);

    logger.info("fetching skills...");

    if (parsedSkills?.length !== skills.length) {
      // set caching
      redisClient.set("skills", JSON.stringify(skills));
      const oneDay = parseInt(+new Date() / 1000) + 86400;
      redisClient.expireAt("skills", oneDay);

      return res.json({ message: "skills", status: 200, skills: skills });
    } else {
      return res.json({
        message: "skills",
        status: 200,
        skills: parsedSkills,
      });
    }
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error });
  }
};

module.exports = getAll;
