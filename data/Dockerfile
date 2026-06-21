FROM mongo:7.0 AS mongo-source
FROM node:20-slim AS base
WORKDIR /app

# Cài các thư viện glibc-runtime mà mongosh/mongodump/mongorestore cần
RUN apt-get update && apt-get install -y --no-install-recommends \
    libssl3 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=mongo-source /usr/bin/mongosh /usr/bin/mongosh
COPY --from=mongo-source /usr/bin/mongodump /usr/bin/mongodump
COPY --from=mongo-source /usr/bin/mongorestore /usr/bin/mongorestore

COPY package*.json ./
RUN npm ci
COPY . .

USER node
CMD ["npm", "run", "db:init"]