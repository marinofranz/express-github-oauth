FROM node:12

# Create dir
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "."]