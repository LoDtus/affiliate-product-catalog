FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Chạy chế độ dev để dễ dàng code, nếu production sẽ là npm run build && npm run start
CMD ["npm", "run", "dev"]