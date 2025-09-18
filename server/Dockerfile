FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Expose the port the app runs on
EXPOSE 8888

# Command to start the server
CMD ["npm", "run", "server"]