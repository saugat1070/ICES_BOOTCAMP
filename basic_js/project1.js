const read = require("readline-sync");
const products = [
  { name: "Apple", category: "Fruit", Price: 500 },
  { name: "Banana", category: "Fruit", Price: 150 },
  { name: "Chicken", category: "Meat", Price: 1200 },
  { name: "Rice", category: "Grain", Price: 800 },
  { name: "Milk", category: "Dairy", Price: 350 },
  { name: "Broccoli", category: "Vegetable", Price: 400 },
  { name: "Salmon", category: "Seafood", Price: 2500 },
  { name: "Bread", category: "Bakery", Price: 250 },
  { name: "Cheese", category: "Dairy", Price: 900 },
  { name: "Mango", category: "Fruit", Price: 600 },
];

// method: add product on inventory
function addProduct(){
    console.log("New Product Details");
    const name = read.question("Enter product Name:");
    const category = read.question("Enter product Category");
    const price = read.question("Enter product price");
    const newProduct = {
        name: name,
        category: category,
        Price: price
    }

    products.push(newProduct);
}

// method: filter product from inventory
function filterProductByCategory(){
    const categoryName = read.question("Enter category:");
    const filteredProducts = products.filter((item)=>{
        return item.category.toLowerCase() === categoryName.toLowerCase()
    });
    console.log("Filter products \n");
    filteredProducts.forEach((item)=>{
        console.log(item.name,item.category,item.price)
    })
}


while(true){
    console.log("Methods menu");
    console.log("1. Add Product");
    console.log("2. Filter Product");
    console.log("3. Exit");
    const choice = read.question("Enter your choice:");

    // switch implementation
    // when user click 3 (Exit), exit the program
    // 
    
}



