# ================================= stage 1 - install dependencies
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN apk add openssl
RUN apk add openssl1.1-compat
RUN apk add --no-cache redis


RUN npm install -g pnpm
RUN pnpm install
RUN pnpm add redis


COPY prisma ./prisma/

COPY . .

EXPOSE 5000

RUN npx prisma generate

CMD ["npx", "prisma","migrate", "dev"]
CMD ["npx", "prisma","studio"]
# CMD ["npx", "prisma","db", "seed", "--preview-feature"]
CMD ["pnpm", "run","dev"]
