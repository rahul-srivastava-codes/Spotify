# Stage 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and lock file first (better caching)
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

# Build Vite app (output goes to /dist)
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
