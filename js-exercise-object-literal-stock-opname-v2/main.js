function stockOpname(items) {
    let stockItems = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }
    if (items.length === 0) {
        return "Data not found";
    }

    // Loop melalui data penjualan dan update stockItems
    for (let i = 0; i < items.length; i++) {
        let [item, sold] = items[i];

        // Kurangi jumlah item di stockItems berdasarkan penjualan
        if (stockItems[item] !== undefined) {
            stockItems[item] -= sold;
        }
    }

    return stockItems;
}
let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname