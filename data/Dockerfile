FROM mongo:7.0 AS mongo-source
FROM node:20-alpine AS base
WORKDIR /app

COPY --from=mongo-source /usr/bin/mongosh /usr/bin/mongosh
COPY --from=mongo-source /usr/bin/mongodump /usr/bin/mongodump
COPY --from=mongo-source /usr/bin/mongorestore /usr/bin/mongorestore

RUN apk add --no-cache libgcc libstdc++
COPY package*.json ./

RUN npm ci
COPY . .

USER node
CMD ["npm", "run", "db:init"]