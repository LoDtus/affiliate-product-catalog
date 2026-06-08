const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

function createCollectionIfNotExists(name) {
    const exists = db.getCollectionNames().includes(name);
    if (!exists) {
        db.createCollection(name);
        print(`Created collection: ${name}`);
    }
}

function createIndexIfNotExists(collection, indexSpec, options) {
    db[collection].createIndex(indexSpec, options);
}

// medias
createCollectionIfNotExists("medias");
createIndexIfNotExists(
    "medias",
    { slug: 1 },
    { unique: true, name: "idx_medias_slug_unique" }
);

// shops
createCollectionIfNotExists("shops");
createIndexIfNotExists(
    "shops",
    { slug: 1 },
    { unique: true, name: "idx_shops_slug_unique" }
);