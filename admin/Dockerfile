FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Chạy dev server của Vite và binding host để container bên ngoài truy cập được
CMD ["npm", "run", "dev", "--", "--host"]