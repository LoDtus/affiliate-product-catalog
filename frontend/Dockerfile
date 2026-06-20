# ---------- STAGE 1: Khởi tạo môi trường ----------
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

# ---------- STAGE 2: Development - Phục vụ chạy Dev trong Docker ----------
FROM base AS development
# CMD ["sh", "-c", "npm install && npm run dev:docker"]
COPY package.json package-lock.json* ./
RUN npm ci

# ---------- STAGE 3: Builder - Đóng gói dự án (Chạy khi deploy) ----------
FROM base AS builder
COPY --from=development /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_SOCKET_PATH
ENV NODE_ENV=production

RUN npm run build

# ---------- STAGE 4: Production - Đóng gói sản phẩm cuối ----------
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

ARG PORT=3000
ENV PORT=${PORT}

# Tạo user ảo để chạy ứng dụng (Tăng tính bảo mật, tránh quyền root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Chỉ copy những file cần thiết
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs
EXPOSE ${PORT}

CMD ["node", "server.js"]