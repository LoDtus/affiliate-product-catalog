const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

db.medias.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "name": "DEFAULT_PRODUCT.jpg",
        "slug": "slug-image-1",
        "path": "disk/default/DEFAULT_PRODUCT.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 6423,
        "duration": null,
        "dimensions": {
            "width": 500,
            "height": 500
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000002"),
        "name": "DEFAULT_USER.jpg",
        "slug": "slug-image-2",
        "path": "disk/default/DEFAULT_USER.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 7398,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 730
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000003"),
        "name": "product-000.jpg",
        "slug": "slug-image-3",
        "path": "disk/examples/product-000.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 46872,
        "duration": null,
        "dimensions": {
            "width": 735,
            "height": 670
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000004"),
        "name": "product-001.jpg",
        "slug": "slug-image-4",
        "path": "disk/examples/product-001.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 45877,
        "duration": null,
        "dimensions": {
            "width": 800,
            "height": 800
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000005"),
        "name": "product-002.jpg",
        "slug": "slug-image-5",
        "path": "disk/examples/product-002.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 34481,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1308
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000006"),
        "name": "product-003.jpg",
        "slug": "slug-image-6",
        "path": "disk/examples/product-003.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 303567,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 1800
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000007"),
        "name": "product-004.jpg",
        "slug": "slug-image-7",
        "path": "disk/examples/product-004.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 71407,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1103
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000008"),
        "name": "product-005.jpg",
        "slug": "slug-image-8",
        "path": "disk/examples/product-005.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 102740,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 1500
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000009"),
        "name": "product-006.jpg",
        "slug": "slug-image-9",
        "path": "disk/examples/product-006.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 171353,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 2133
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000010"),
        "name": "product-007.jpg",
        "slug": "slug-image-10",
        "path": "disk/examples/product-007.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 81085,
        "duration": null,
        "dimensions": {
            "width": 1024,
            "height": 1536
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000011"),
        "name": "product-008.jpg",
        "slug": "slug-image-11",
        "path": "disk/examples/product-008.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 75076,
        "duration": null,
        "dimensions": {
            "width": 679,
            "height": 678
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000012"),
        "name": "product-009.jpg",
        "slug": "slug-image-12",
        "path": "disk/examples/product-009.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 73367,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 985
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000013"),
        "name": "product-010.jpg",
        "slug": "slug-image-13",
        "path": "disk/examples/product-010.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 180852,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 1600
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000014"),
        "name": "product-011.jpg",
        "slug": "slug-image-14",
        "path": "disk/examples/product-011.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 34510,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 980
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000015"),
        "name": "product-012.jpg",
        "slug": "slug-image-15",
        "path": "disk/examples/product-012.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 91817,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1472
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000016"),
        "name": "product-013.jpg",
        "slug": "slug-image-16",
        "path": "disk/examples/product-013.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 95899,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1104
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000017"),
        "name": "product-014.jpg",
        "slug": "slug-image-17",
        "path": "disk/examples/product-014.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 69586,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 981
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000018"),
        "name": "product-015.jpg",
        "slug": "slug-image-18",
        "path": "disk/examples/product-015.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 103217,
        "duration": null,
        "dimensions": {
            "width": 1088,
            "height": 1088
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000019"),
        "name": "product-016.jpg",
        "slug": "slug-image-19",
        "path": "disk/examples/product-016.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 116607,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 1600
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000020"),
        "name": "product-017.jpg",
        "slug": "slug-image-20",
        "path": "disk/examples/product-017.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 36411,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1104
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000021"),
        "name": "product-018.jpg",
        "slug": "slug-image-21",
        "path": "disk/examples/product-018.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 55212,
        "duration": null,
        "dimensions": {
            "width": 1080,
            "height": 1332
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000022"),
        "name": "product-019.jpg",
        "slug": "slug-image-22",
        "path": "disk/examples/product-019.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 55198,
        "duration": null,
        "dimensions": {
            "width": 719,
            "height": 1280
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000023"),
        "name": "product-020.jpg",
        "slug": "slug-image-23",
        "path": "disk/examples/product-020.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 130169,
        "duration": null,
        "dimensions": {
            "width": 1000,
            "height": 1000
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000024"),
        "name": "product-021.jpg",
        "slug": "slug-image-24",
        "path": "disk/examples/product-021.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 18731,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 736
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000025"),
        "name": "product-022.jpg",
        "slug": "slug-image-25",
        "path": "disk/examples/product-022.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 46894,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1103
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000026"),
        "name": "product-023.jpg",
        "slug": "slug-image-26",
        "path": "disk/examples/product-023.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 84462,
        "duration": null,
        "dimensions": {
            "width": 735,
            "height": 744
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000027"),
        "name": "product-024.jpg",
        "slug": "slug-image-27",
        "path": "disk/examples/product-024.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 183341,
        "duration": null,
        "dimensions": {
            "width": 1199,
            "height": 1331
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000028"),
        "name": "product-025.jpg",
        "slug": "slug-image-28",
        "path": "disk/examples/product-025.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 120343,
        "duration": null,
        "dimensions": {
            "width": 1080,
            "height": 1350
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000029"),
        "name": "product-026.jpg",
        "slug": "slug-image-29",
        "path": "disk/examples/product-026.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 150289,
        "duration": null,
        "dimensions": {
            "width": 1200,
            "height": 1500
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000030"),
        "name": "product-027.jpg",
        "slug": "slug-image-30",
        "path": "disk/examples/product-027.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 34685,
        "duration": null,
        "dimensions": {
            "width": 735,
            "height": 665
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000031"),
        "name": "product-028.jpg",
        "slug": "slug-image-31",
        "path": "disk/examples/product-028.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 82069,
        "duration": null,
        "dimensions": {
            "width": 736,
            "height": 1104
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000032"),
        "name": "product-029.jpg",
        "slug": "slug-image-32",
        "path": "disk/examples/product-029.jpg",
        "alt": "example-image",
        "caption": "example-image",
        "mimeType": "image/jpeg",
        "size": 127198,
        "duration": null,
        "dimensions": {
            "width": 1124,
            "height": 1124
        },
        "attachedTo": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    }
]);