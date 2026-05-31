#!/usr/bin/env bash

set -e  # Dừng ngay nếu có lỗi

# Cấu hình kết nối MongoDB (thay đổi nếu cần)
MONGO_URI="mongodb://localhost:27017/admin"
DB_NAME="affiliate-product-catalog"
SEED_DIR="../schemas"  # Đường dẫn tương đối từ scripts/ đến schemas/

echo "Starting"
echo "URI: $MONGO_URI"
echo "Database: $DB_NAME"
echo "Folder: $SEED_DIR"
echo "----------------------------------------"

# Chạy từng file theo thứ tự tên (01-, 02-, ...)
for file in $(ls "$SEED_DIR"/*.js | sort -V); do
    filename=$(basename "$file")
    echo "Running: $filename..."

    mongosh "$MONGO_URI" --file "$file" --quiet

    if [ $? -eq 0 ]; then
        echo "Completed: $filename"
    else
        echo "Error $filename"
        exit 1
    fi
    echo "----------------------------------------"
done

echo "Finish seed data MongoDB!"
echo "Check database: mongosh $MONGO_URI"