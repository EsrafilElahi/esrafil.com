// require('dotenv').config();

// const config = {
//   server: {
//     host: process.env.HOST || 'localhost',
//     port: process.env.PORT || 5000,
//   },
//   api: {
//     version: process.env.apiVersion || 'v1',
//     apiRoutePrefix: process.env.apiRoutePrefix || '/api',
//     swaggerRoutePrefix: process.env.swaggerRoutePrefix || '/docs',
//   },
//   db: {
//     url: process.env.DATABASE_URL || 'postgres://admin:password@db:5432/prisma-db',
//     admin: process.env.DB_ADMIN_PORT || 8081,
//   },
//   auth: {
//     jwtSecret: process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY',
//   },

//   cors: {
//     origin: process.env.UI?.split(',') || '*',
//   },

//   cookie: {
//     options: {
//       httpOnly: true,
//       domain: process.env.HOST || '',
//       secure: true,
//       sameSite:
//         process.env.NODE_ENV === 'production'
//           ? 'strict'
//           : process.env.NODE_ENV === 'staging'
//           ? 'lax'
//           : 'none',
//     },
//   },
// };

// module.exports = config;
