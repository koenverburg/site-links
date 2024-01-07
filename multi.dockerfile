# base layer, here only install the node modules
FROM node:18-alpine AS base
WORKDIR /app
COPY . .
RUN npm install

# builder layer, here only build the application
FROM base AS builder
COPY --from=base app/package.json ./package.json
RUN npm run build

# runner layer, here we get all the parts from the previous layers to run the app
FROM node:18-alpine AS runner
COPY --from=base app/package.json ./package.json
COPY --from=base app/node_modules ./node_modules
COPY --from=builder app/.next .next

# expose the 3000 port
EXPOSE 3000

CMD ["npm", "start"]
