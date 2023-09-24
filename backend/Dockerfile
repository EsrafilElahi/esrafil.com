# base node image
FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY package.json package-lock.json ./
RUN npm prune --production

# Build the app
FROM base as build

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

# If we're using Prisma, uncomment to cache the prisma schema
COPY prisma .
RUN npx prisma generate

COPY . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV production

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

# Uncomment if using Prisma
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

COPY --from=build /app/dist ./dist
COPY . .

CMD ["node", "dist/src/index.js"]