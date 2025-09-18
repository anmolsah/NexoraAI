# Stage 1: Build the React application using Node.js 18
FROM node:20.19-alpine AS builder

WORKDIR /app

# Copy only package.json to install dependencies first
# This leverages Docker's cache more effectively
COPY package.json ./

# Install dependencies (this will generate a fresh package-lock.json)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]