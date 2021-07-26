FROM node:14.17.0-alpine

# create root application folder
WORKDIR /usr/src/app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./

# copy source code to /app/src folder
COPY . .
# check files list
RUN ls -a

# install
RUN yarn

# build
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/src/app.js" ]