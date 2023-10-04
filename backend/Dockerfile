# ================================= stage 1 - install dependencies
FROM node:18-alpine
# FROM node:16-bullseye-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# RUN apt update -y && apt install -y openssl
RUN apk add openssl
RUN apk add openssl1.1-compat

RUN npm install -g pnpm

RUN pnpm install

# RUN pnpm add redis


# ================================= stage 2 - dev mode
# FROM deps as dev

# WORKDIR /app

COPY prisma ./prisma/

COPY . .

EXPOSE 5000

# RUN npx prisma migrate
RUN npx prisma generate

# CMD ["npx", "prisma","migrate", "dev"]
CMD ["pnpm", "run","dev"]