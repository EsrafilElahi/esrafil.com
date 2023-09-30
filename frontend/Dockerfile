# ======================================== Stage 1: install dependencies
FROM node:20-alpine3.17 as deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile --fix-lockfile



# ======================================== Stage 2: run dev mode
FROM deps AS dev

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 5173

CMD [ "pnpm", "run", "dev" ]



# ======================================== Stage 3: build app
FROM deps as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm add typescript

RUN pnpm run build



# ======================================== Stage 4: preview app locally
FROM builder as preview

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]


# ======================================== Stage 5: run app in staging server
FROM builder as staging

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist .

ENV NODE_ENV development 

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]



# ======================================== Stage 6: run app in production server
FROM builder as prod

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist .

ENV NODE_ENV production 

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]
