# Base image (Node v6.9 LTS Alpine Linux)
FROM node:6.9-alpine

# Arguments declaration
ARG NODE_PORT=3000

# Create and enter the application directory
RUN mkdir -p /moosic/api
WORKDIR /moosic/api

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Expose the port where app will run
EXPOSE $NODE_PORT

# Start app with NPM
CMD ["npm", "start"]