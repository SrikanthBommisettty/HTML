//constructor function
class person {
    constructor(name, age) {
        this.name = name; //public property
        this.age = age;
    }
}
let person1 = new person("srikanth" , 24);
let person2 = new person("chandu", 25);
console.log(`person object: ${JSON.stringify(person1)}`);
console.log(person2.name , person2.age);

person1.gender = 'male';
console.log(person2.name , person2.age, person2.gender);


// Define an array of items in the shopping cart, each with a name and price.
const shoppingCart = [
    { name: "Shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Shoes", price: 60 },
    { name: "Hat", price: 10 },
  ];
  
  // Calculate the total cost of items using arrow functions.
  const calculateTotalCost = (cart) => {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const tax = subtotal * 0.1; // Assuming a 10% sales tax
    const totalCost = subtotal + tax;
    return totalCost;
  };
  
  // Display the shopping cart and total cost.
  console.log("Shopping Cart:");
  shoppingCart.forEach((item) => {
    console.log(`${item.name}: $${item.price}`);
  });
  
  const total = calculateTotalCost(shoppingCart);
  console.log(`Total Cost: $${total.toFixed(2)}`);
  
//factorial function
const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  const num = 5;
  const result = factorial(num);
  
  console.log(`The factorial of ${num} is ${result}`);
  console.log(result);