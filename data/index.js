import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = nodeEnv === 'development' ? '.env.development' : '.env.production';

const localEnvPath = path.resolve(process.cwd(), envFile);
const rootEnvPath = path.resolve(__dirname, `../${envFile}`);

dotenv.config({
    path: fs.existsSync(localEnvPath) ? localEnvPath : rootEnvPath
});

const DB_MODE =         process.env.DB_MODE || "init-only";  // "init-only" | "init-and-seed" | "reset"
const MONGO_USERNAME =  process.env.MONGO_USERNAME;
const MONGO_PASSWORD =  process.env.MONGO_PASSWORD;
const MONGO_PORT =      process.env.DOCKER_MONGO_PORT || process.env.MONGO_PORT || "27017";
let MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/affiliate-product-catalog?authSource=admin`;
} else {
    // Nếu có MONGODB_URI từ file env truyền vào, đảm bảo nó trỏ về đúng localhost và đúng cổng nội bộ của Docker
    if (MONGO_URI.includes('@mongodb:')) {
        MONGO_URI = MONGO_URI.replace('@mongodb:', '@localhost:');
    }
    if (process.env.MONGO_PORT && process.env.DOCKER_MONGO_PORT && MONGO_URI.includes(`:${process.env.MONGO_PORT}`)) {
        MONGO_URI = MONGO_URI.replace(`:${process.env.MONGO_PORT}`, `:${process.env.DOCKER_MONGO_PORT}`);
    }
}

const INIT_DIR = path.resolve(__dirname, './init');
const SEED_DIR = path.resolve(__dirname, './seeds');

try {
    console.log(`\n---------- STARTING MONGODB CONFIGURATION [Mode: ${DB_MODE}] ----------`);
    console.log(`Connection URI: mongodb://${MONGO_USERNAME}:******@localhost:${MONGO_PORT}/...`);

    // Stage 1: Khởi tạo database và xóa dữ liệu cũ nếu ở chế độ SEED
    console.log('- Running: 01-setup-database.js...');
    const isReset = (DB_MODE === "init-and-seed" || DB_MODE === "reset") ? "true" : "false";
    execSync(
        `mongosh "${MONGO_URI}" --eval "var reset=${isReset};" --file "${path.join(INIT_DIR, '01-setup-database.js')}" --quiet`,
        { stdio: 'inherit' }
    );

    // Stage 2: Tạo cấu trúc bảng trống và Indexes
    console.log('- Running: 02-indexes.js...');
    execSync(
        `mongosh "${MONGO_URI}" --file "${path.join(INIT_DIR, '02-indexes.js')}" --quiet`,
        { stdio: 'inherit' }
    );

    // Stage 3: Tạo dữ liệu mẫu
    if (DB_MODE === "init-and-seed") {
        console.log('\n[SEEDING DATA] Injecting seed data into collections...');
        const seedFiles = fs.readdirSync(SEED_DIR).filter(file => file.endsWith('.js')).sort();

        for (const file of seedFiles) {
            console.log(`- Executing: ${file}`);
            execSync(
                `mongosh "${MONGO_URI}" --file "${path.join(SEED_DIR, file)}" --quiet`,
                { stdio: 'inherit' }
            );
        }
    }

    console.log('\n---------- MONGODB WORKFLOW COMPLETED SUCCESSFULLY ----------\n');
} catch (error) {
    console.error('\n[ERROR] An error occurred during database configuration:', error.message);
    process.exit(1);
}