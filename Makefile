# ---------- VARIABLES ----------
FRONTEND_DIR=frontend
BACKEND_DIR=backend
ADMIN_DIR=admin
DATA_DIR=data

DOCKER_DEV=docker-compose.dev.yml
DOCKER_PROD=docker-compose.prod.yml

# Tự động nạp file .env để lấy các biến cấu hình (như BACKEND_PORT, DB_MODE, v.v.)
ifneq ($(wildcard .env.development),)
    include .env.development
    export
endif

.PHONY: install lint db-local-migrate db-local-seed dev-local-full \
	dev-build dev-full dev-backend dev-frontend dev-admin dev-migrate dev-seed dev-down dev-down-clear \
	prod-migrate prod-up prod-down clear

# ---------- LOCAL DEVELOPMENT ----------
install:
	cd $(BACKEND_DIR) && npm install
	cd $(FRONTEND_DIR) && npm install
	cd $(ADMIN_DIR) && npm install
	cd $(DATA_DIR) && npm install

lint:
	cd $(BACKEND_DIR) && npm run lint || true
	cd $(FRONTEND_DIR) && npm run lint || true
	cd $(ADMIN_DIR) && npm run lint || true

# Yêu cầu: Phải có mongosh trong máy
db-local-migrate:
	cd $(DATA_DIR) && DB_MODE=init-only node index.js

db-local-seed:
	cd $(DATA_DIR) && DB_MODE=init-and-seed node index.js

dev-local-full:
	@echo "Starting all services locally..."
	(cd $(BACKEND_DIR) && PORT=$(BACKEND_PORT) npm run start:dev) & \
	(cd $(FRONTEND_DIR) && PORT=$(FRONTEND_PORT) npm run dev -- -p $(FRONTEND_PORT)) & \
	(cd $(ADMIN_DIR) && npm run dev -- --host 0.0.0.0 --port $(ADMIN_PORT)) & \
	wait



# ---------- DOCKER DEVELOPMENT ----------
# Chỉ chạy lệnh này khi THAY ĐỔI package.json (thêm thư viện) hoặc sửa Dockerfile
dev-build:
	docker compose -f $(DOCKER_DEV) up -d --build

dev-full:
	docker compose -f $(DOCKER_DEV) up -d

dev-migrate:
	docker compose -f $(DOCKER_DEV) up -d mongodb
	DB_MODE=init-only docker compose -f $(DOCKER_DEV) up -d db-seeder

dev-seed:
	docker compose -f $(DOCKER_DEV) up -d mongodb
	DB_MODE=init-and-seed docker compose -f $(DOCKER_DEV) up -d db-seeder

dev-down:
	docker compose -f $(DOCKER_DEV) down

dev-down-clear:
	docker compose -f $(DOCKER_DEV) down -v



# ---------- PRODUCTION DEPLOYMENT ----------
# Khởi tạo Schema và tạo Index trống an toàn trên Production (Chạy một lần duy nhất khi deploy bản mới)
prod-migrate:
	docker compose -f $(DOCKER_PROD) exec -it mongodb mongosh -u $(MONGO_USERNAME) -p $(MONGO_PASSWORD) --authenticationDatabase admin --file ./data/init/02-indexes.js

prod-up:
	docker compose -f $(DOCKER_PROD) up -d --build

prod-down:
	docker compose -f $(DOCKER_PROD) down



# ---------- SYSTEM CLEANING ----------
clear:
	@echo "Deep cleaning project directories..."
	rm -rf $(FRONTEND_DIR)/.next
	rm -rf $(BACKEND_DIR)/dist $(BACKEND_DIR)/*.tsbuildinfo
	rm -rf $(ADMIN_DIR)/dist
	rm -rf node_modules $(FRONTEND_DIR)/node_modules $(BACKEND_DIR)/node_modules $(ADMIN_DIR)/node_modules $(DATA_DIR)/node_modules
	@echo "All local caches and node_modules have been cleared successfully!"