# Use Node.js 22 image
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application source code
COPY . .

# Build the React application for production
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Serve the build directory
CMD ["serve", "-s", "build"]

