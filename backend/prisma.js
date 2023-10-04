const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     datasources: {
//       db: {
//         url: process.env.DATABASE_URL, // Update this to your local PostgreSQL connection URL
//       },
//     },
//   });

module.exports = prisma;
