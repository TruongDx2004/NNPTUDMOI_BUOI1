
// 1. Khai bao product
var Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
// 2. Khoi tao products
var product1 = new Product("P001", "Laptop", 31000000, 10, "Electronics", true);
var product2 = new Product("P002", "Smartphone", 15000000, 0, "Electronics", true);
var product3 = new Product("P003", "Desk Chair", 1200000, 15, "Furniture", false);
var product4 = new Product("P004", "Book", 200000, 5, "Stationery", true);
var product5 = new Product("P005", "Headphones", 2000000, 5, "Accessories", true);
var product6 = new Product("P006", "Coffee Maker", 1000000, 0, "Appliances", false);
var product7 = new Product("P007", "Notebook", 5000000, 10, "Stationery", true);
var product8 = new Product("P008", "Monitor", 500000, 0, "Accessories", true);
var product9 = new Product("P009", "Office Desk", 2500000, 0, "Accessories", true);
var product10 = new Product("P010", "Tablet", 4000000, 18, "Electronics", true);
var products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
console.log("Mang san pham: ", products)
// 3. Mang moi chua name va price
var detailProducts = products.map(function (product) {
    return {
        name: product.name,
        price: product.price
    };
});
console.log("Lay ten va gia cua moi san pham: ", detailProducts);
// 4. Cac san pham con hang trong kho
var inStockProducts = products.filter(function (product) {
    return product.quantity > 0;
})
console.log("Cac san pham con hang: ", inStockProducts);
// 5. Co it nhat mot san pham tren 30 trieu hay khong
var hasProduct = products.some(function (product) {
    return product.price > 3e7;
})
console.log(hasProduct ? "Co san pham lon hon 30 trieu" : "Khong co san pham lon hon 30 trieu");
// 6. Kiem tra tat ca cac san pham danh muc Accessories co dang duoc ban hay khong
var allAccessoriesAvailable = products.every(function (product) {
    if (product.category != "Accessories")
        return true;
    return product.isAvailable;
})
// cach 2
allAccessoriesAvailable = products.filter(p => p.category == "Accessories").every(p => p.isAvailable);
console.log(allAccessoriesAvailable ? "Tat ca cac Accessories dang duoc ban" : "Mot so Accessories chua duoc ban");
// 7. Tong gia tri kho hang
var totalPrice = products.reduce(function (sum, product) {
    return sum + product.price * product.quantity;
}, 0);
console.log("Tong gia tri trong kho: ", totalPrice);
// 8. Dung for of in ra san pham
for (const element of products) {
    console.log(element.name, " - ", element.category, " - ", (element.isAvailable) ? "Đang bán" : "Đang ẩn")
}
// 9. Dung for in de in ra ten thuoc tinh va gia tri
products.forEach(product => {
    console.log("==> San pham: ", product.name);
    for (const key in product) {
        console.log(key, ": ", product[key]);
    }
});
// 10. Cac san pham dang ban, con hang
var availableProducts = products.filter(function (product) {
    return product.isAvailable && product.quantity > 0;
})
console.log("Cac san pham dang ban va con hang: ", availableProducts);