FROM node:8.12-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install https://raw.githubusercontent.com/matche2100/vizceral/master/blob/vizceral.tar
RUN npm install https://raw.githubusercontent.com/matche2100/vizceral-react/master/blob/vizceral-react.tar

# Install app dependencies
RUN npm install --ignore-scripts

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "run", "start" ]
