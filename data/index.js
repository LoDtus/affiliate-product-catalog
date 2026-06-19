import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Nạp file .env từ thư mục gốc
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const DB_MODE = process.env.DB_MODE || "init-only";

// Lấy thông tin kết nối từ môi trường do Docker Compose tiêm vào hoặc file .env local
const MONGO_USERNAME = process.env.MONGO_USERNAME || "root";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "rootpw";
const MONGO_PORT = process.env.MONGO_PORT || "27018";

// Khi chạy TRONG mạng nội bộ của Docker, container kết nối qua localhost:27017 nhờ chung dải network_mode
// Khi chạy NGOÀI máy thật (Local thủ công), container kết nối qua localhost:27018 (MONGO_PORT)
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/affiliate-product-catalog?authSource=admin`;

const INIT_DIR = path.resolve(__dirname, './init');
const SEED_DIR = path.resolve(__dirname, './seeds');

try {
    console.log(`\n=== 🔌 STARTING MONGODB CONFIGURATION [Mode: ${DB_MODE}] ===`);
    console.log(`Connection URI: mongodb://${MONGO_USERNAME}:******@localhost:${MONGO_PORT}/...`);

    // Stage 1: Khởi tạo database và xóa dữ liệu cũ nếu ở chế độ SEED
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

    // Stage 3: Nạp dữ liệu mẫu
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