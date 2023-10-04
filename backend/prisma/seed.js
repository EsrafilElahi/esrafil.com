const projects = require("./projects");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function main() {
  for (let project of projects) {
    prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        link: project.link,
      },
    });
  }
}

main();
