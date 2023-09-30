# Stage 1: Dependency Installation
FROM node:20-alpine3.17 as deps

WORKDIR /app

ENV NODE_ENV development

COPY package.json pnpm-lock.yaml ./

# RUN npm install -g pnpm && pnpm install --frozen-lockfile
RUN npm install -g pnpm && pnpm install

# Stage 2: run app in dev mode
# FROM deps AS dev

COPY . .

EXPOSE 5173

CMD [ "pnpm", "run", "dev" ]


