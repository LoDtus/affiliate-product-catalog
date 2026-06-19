# ---------- STAGE 1: Khởi tạo môi trường ----------
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ---------- STAGE 2: Development ----------
FROM base AS development
CMD ["sh", "-c", "npm install && npm run dev"]

# STAGE 3: Builder - Biên dịch dự án ra file tĩnh
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

ARG VITE_API_BASE_URL
ARG VITE_SOCKET_PATH
ARG NODE_ENV

RUN npm run build

# ---------- STAGE 4: Production - Đóng gói và chạy qua Nginx ----------
FROM nginx:stable-alpine AS production

# Xóa cấu hình mặc định và nạp cấu hình tùy biến
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]