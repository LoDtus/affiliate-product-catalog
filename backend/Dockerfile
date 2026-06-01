FROM node:20-alpine

WORKDIR /app

# Copy package files để tối ưu hóa cache của Docker layers
COPY package*.json ./
RUN npm install

# Copy toàn bộ code (trừ các file trong .dockerignore)
COPY . .

# NestJS build ra thư mục dist
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]