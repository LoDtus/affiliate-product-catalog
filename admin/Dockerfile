# STAGE 1: Khởi tạo môi trường
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# STAGE 2: Development
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 9261
CMD ["npm", "run", "docker:dev"]

# STAGE 3: Builder - Biên dịch dự án ra file tĩnh
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run docker:build

# STAGE 4: Production - Đóng gói và chạy qua Nginx
FROM nginx:stable-alpine AS production

# Xóa cấu hình mặc định và nạp cấu hình tùy biến
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Chuyển thư mục 'dist' từ tầng builder sang Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]