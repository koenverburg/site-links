FROM node:18-alpine

WORKDIR /app

# Copy the source code from the current directory into the root of the container
COPY . .

RUN npm install
RUN npm run build

# expose the 3000 port
EXPOSE 3000 

CMD ["npm", "start"]
