###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:18-alpine As backend

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node ./backend/package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

RUN npm install -g typescript 

# Bundle app source
COPY --chown=node:node ./backend .

# Use the node user from the image (instead of the root user)
USER node 

###################
# BUILD FOR LOCAL Frontend
###################
FROM node:18-alpine as frontend

# Create app directory
WORKDIR /usr/src/app

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
COPY ./frontend .

RUN npm ci   
RUN npm install -g typescript 
#For Development only
RUN react-scripts start

# CMD ["npm", "run", "start"]