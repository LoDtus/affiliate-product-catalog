# ---------- STAGE 1: Khởi tạo môi trường ----------
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ---------- STAGE 2: Development ----------
FROM base AS development
CMD ["sh", "-c", "npm install && npm run start:dev"]

# ---------- STAGE 3: Builder ----------
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

# ---------- STAGE 4: Production ----------
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Tạo user ảo để chạy ứng dụng an toàn
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

USER nestjs
CMD ["npm", "run", "start:prod"]