# ---------- VARIABLES ----------
FRONTEND_DIR=frontend
BACKEND_DIR=backend
ADMIN_DIR=admin
DOCKER_DEV=${DOCKER_DEV}
DOCKER_PROD=${DOCKER_PROD}

# ---------- DATABASE ----------
migrate:
    cd data && npm npm db:init

seed:
	cd data && npm npm db:seed

# ----------INSTALL ----------
install-backend:
	cd $(BACKEND_DIR) && npm install

install-frontend:
	cd $(FRONTEND_DIR) && npm install

install-admin:
	cd $(ADMIN_DIR) && npm install

install-all:
	cd $(FRONTEND_DIR) && npm install
	cd $(BACKEND_DIR) && npm install
	cd $(ADMIN_DIR) && npm install

# ---------- LINT ----------
lint:
	cd $(FRONTEND_DIR) && npm run lint
	cd $(BACKEND_DIR) && npm run lint
	cd $(ADMIN_DIR) && npm run lint

# ---------- DOCKER ----------
# Development
dev-backend:
	docker compose -f ${DOCKER_DEV} up -d database backend

dev-frontend:
	docker compose -f ${DOCKER_DEV} up -d frontend

dev-admin:
	docker compose -f ${DOCKER_DEV} up -d admin

dev-full:
    docker compose -f ${DOCKER_DEV} up -d

dev-down:
	docker compose -f ${DOCKER_DEV} down

dev-down-full:
	docker compose -f ${DOCKER_DEV} down -v

# Production
up:
	docker compose -f ${DOCKER_PROD} up -d

down:
	docker compose -f ${DOCKER_PROD} down

# ---------- CLEAR ----------
clear:
	rm -rf node_modules
	rm -rf frontend/node_modules
	rm -rf backend/node_modules
	rm -rf backend/dist
	rm -rf admin/node_modules