db = db.getSiblingDB("affiliate-product-catalog");
db.events.drop();

db.events.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "sid": "000000000000000000000001", // Session ID sinh tự động từ Frontend
        "act": "v", // v = view, co = click-out, sd = scroll-depth, ts = time-spent
        "tType": "p", // p = product, a = article, s = shop, a = affiliate, c = catetory
        "val": 30, // Số giây ở lại (nếu hành động là ts) hoặc % cuộn trang (nếu là sd)
        "tId": ObjectId("000000000000000000000001"), // ID đối tượng bị tác động
        "rat": ISODate("2026-05-21T09:00:00Z") // Thời gian ghi nhận event
    }
]);