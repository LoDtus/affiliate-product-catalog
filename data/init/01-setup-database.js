const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

print("==================================================");
print(`[INIT] Creating database: ${TARGET_DB_NAME}`);
print("==================================================");

if (typeof rst !== "undefined" && reset === true) {
    db.dropDatabase();
    print("[DATABASE RESET] Database dropped to reset development environment.");
}

// mongosh --eval "var rst=true;" 01-setup-database.js → DB sẽ bị xóa