import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

// Cấu hình để dùng được __dirname trong ES Module (type: "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

// Lấy cấu hình từ biến môi trường do package.json truyền xuống
const DB_MODE = process.env.DB_MODE || "init-only";
const 
const MONGO_URI = DB_MODE === "init-and-seed"
    ? `mongodb://${DOCKER_DEV_MONGO_USERNAME}:${DOCKER_DEV_MONGO_PASSWORD}@localhost:${DOCKER_DEV_MONGO_PORT}/affiliate-product-catalog?authSource=admin`
    : `mongodb://${DOCKER_DEV_MONGO_USERNAME}:${DOCKER_DEV_MONGO_PASSWORD}@localhost:${DOCKER_DEV_MONGO_PORT}/affiliate-product-catalog?authSource=admin`;
const MONGO_URI = process.env.MONGO_URI || "mongodb://root:rootpw@localhost:27018/admin";

const INIT_DIR = path.resolve(__dirname, '../init');
const SEED_DIR = path.resolve(__dirname, '../seeds');

try {
    console.log(`\n=== 🔌 STARTING MONGODB CONFIGURATION [Mode: ${DB_MODE}] ===`);

    // Stage 1: Khởi tạo database và xóa dữ liệu cũ nếu ở chế độ DEV
    console.log('Running: 01-setup-database.js...');

    const isReset = (DB_MODE === "init-and-seed") ? "true" : "false";
    execSync(
        `mongosh "${MONGO_URI}" --eval "var rst=${isReset};" --file "${path.join(INIT_DIR, '01-setup-database.js')}" --quiet`,
        { stdio: 'inherit' }
    );

    // Stage 2: Khởi tạo cấu trúc bảng trống và Indexes
    console.log('Running: 02-indexes.js...');
    execSync(
        `mongosh "${MONGO_URI}" --file "${path.join(INIT_DIR, '02-indexes.js')}" --quiet`,
        { stdio: 'inherit' }
    );

    // Stage 3: Nạp dữ liệu mẫu (Chỉ kích hoạt khi chạy lệnh db:seed)
    if (DB_MODE === "init-and-seed") {
        console.log('\n🌱 [SEEDING DATA] Đang nạp dữ liệu mẫu vào các collections...');
        const seedFiles = fs.readdirSync(SEED_DIR).filter(file => file.endsWith('.js')).sort();

        for (const file of seedFiles) {
            console.log(` -> Executing: ${file}`);
            execSync(
                `mongosh "${MONGO_URI}" --file "${path.join(SEED_DIR, file)}" --quiet`,
                { stdio: 'inherit' }
            );
        }
    }

    console.log('\n=== 🎉 MONGODB WORKFLOW COMPLETED SUCCESSFULLY ===\n');
} catch (error) {
    console.error('\n❌ [ERROR] Có lỗi xảy ra trong quá trình cấu hình DB:', error.message);
    process.exit(1);
}