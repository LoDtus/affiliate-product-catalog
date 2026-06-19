# ---------- STAGE 1: Khởi tạo môi trường ----------
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ---------- STAGE 2: Development - Phục vụ chạy Dev trong Docker ----------
FROM base AS development
CMD ["sh", "-c", "npm install && npm run dev"]

# ---------- STAGE 3: Builder - Đóng gói dự án (Chạy khi deploy) ----------
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_SOCKET_PATH
ARG NODE_ENV

RUN npm run build

# ---------- STAGE 4: Production - Đóng gói sản phẩm cuối ----------
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
# Tắt telemetry thu thập dữ liệu của Next.js để tăng hiệu năng và bảo mật
ENV NEXT_TELEMETRY_DISABLED=1

# Tạo user ảo để chạy ứng dụng (Tăng tính bảo mật, tránh quyền root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Chỉ copy những file cần thiết
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "start"]