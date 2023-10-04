# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the Prisma Studio files and configuration
COPY prisma ./prisma
COPY .env ./.env

COPY .npmrc ./.npmrc


# Install pnpm globally
RUN npm install -g pnpm

# Install Prisma Studio using pnpm
RUN pnpm add @prisma/studio

# Expose the port
EXPOSE 5555

# Run Prisma Studio with specified host and port
CMD ["npx", "prisma", "studio", "--host", "0.0.0.0", "--port", "5555"]
