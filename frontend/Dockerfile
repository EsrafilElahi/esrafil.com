# ======================================== Stage 1: install dependencies
# FROM node:20-alpine3.17 as deps
FROM node:20-alpine3.17

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# RUN npm install -g pnpm && pnpm install --frozen-lockfile
RUN npm install -g pnpm && pnpm install

# ======================================== Stage 1: dev mode
# Stage 2: run app in dev mode
# FROM deps AS dev

COPY . .

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]


