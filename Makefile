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

.PHONY: install lint db-local-migrate db-local-seed db-local-reset dev-local-full \
	dev-build dev dev-backend dev-frontend dev-admin dev-migrate dev-seed dev-reset dev-down dev-clear \
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
	cd $(DATA_DIR) && npm run db:init

db-local-seed:
	cd $(DATA_DIR) && npm run db:seed

db-local-reset:
	@read -p "This command will DELETE ALL existing data. Continue? [y/N] " confirm && [ "$$confirm" = "y" ]
	cd $(DATA_DIR) && npm run db:reset

# Fix lại
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

dev:
	docker compose -f $(DOCKER_DEV) up -d

dev-migrate:
	docker compose -f $(DOCKER_DEV) --env-file .env.development run --rm db-seeder npm run db:init

dev-seed:
	docker compose -f $(DOCKER_DEV) --env-file .env.development run --rm db-seeder npm run db:seed

dev-reset:
	@read -p "This command will DELETE ALL existing data. Continue? [y/N] " confirm && [ "$$confirm" = "y" ]
	docker compose -f $(DOCKER_DEV) --env-file .env.development run --rm db-seeder npm run db:reset

dev-down:
	docker compose -f $(DOCKER_DEV) down

# Thêm clear db
dev-clear:
	docker compose -f $(DOCKER_DEV) --profile tools down -v --rmi local --remove-orphans
	docker container prune -f --filter "label=com.docker.compose.project=$(APPLICATION_NAME)"



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
	@echo "Docker infrastructure deep cleaning..."
	docker compose -f $(DOCKER_DEV) --profile tools down -v --remove-orphans
	@echo "All local caches, node_modules, and Docker containers/volumes have been wiped!"