// operators
//additon
var a = 5;
let b = 6;
var result = a + b;
console.log(result);
console.log(typeof result)

const name = "srikanth";
//name = 'rama'; // error: cannot reassign to const variable
console.log(typeof name)

//substraction
let B = 10;//reassignment of value is allowed in let and var
B -=2 ;   ///subtraction
console.log("subtracted number", B);  //output -8

//multplication
let multiplication = a * b;
console.log(multiplication);  // output = 30

//division
let division = (b / a);
console.log('divided', division);
//modulus
let modulus =(B % 2 );    ////remainder
console.log(modulus)

// condition
if ((a == b)) {
    alert ("equal");
    } else if((a != b)){
        alert ('not equal');}
        else{
            alert('not equal')};

//equal
let x =30;
let y =300;

if (x===y) {
     console.log("x is equal to y")
} else {
    console.log("x is not equal to y")
}

//not equal
if (x!==y) {
    console.log("x is not equal to y")
} else {
   console.log("x is  equal to y")
}

//Greater than
if (x > y) {
    console.log("x is greater than to y")
} else {
   console.log("x is not greater than to y")
}

//less than 
if (x < y) {
    console.log("x is less than to y")
} else {
   console.log("x is not less then to y")
}

//greaterthan or equal to
if (x >= y) {
    console.log("x is greater than to y")
} else {
   console.log("x is not greater than to y")
}

//less than or equal to
if (x <= y) {
    console.log("x is less than or equal to y")
} else {
   console.log("x is not less than or equal to y")
}

let data = {
    name : "srikanth",
    age : 25,
    place : "Nellore",
}
data.name;
console.log(data.name);


// Function declaration
function student(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Function invocation
  student("srikanth");

  //function
  function add(a, b) {
    return a + b;
  }
  
  const sum = add(2, 3);
  console.log(sum);

  //Arrow Functions

const subtract = (a, b) => 
        a - b;

const difference = subtract(8, 4);
console.log(difference); 

  





// Arrays
  let colors = ["red","orange", "green", "blue"];

// Accessing elements
console.log(colors[0]); 

// Adding elements
colors.push("yellow");

// Iterating through an array
for (let color of colors) {
  console.log(color);
}

//Arrays
let fruits = ['apple', 'banana'];

// Adding an element to the end of the array
fruits.push('grape'); // ['apple', 'banana', 'grape']

// Removing the last element
fruits.pop(); // ['apple', 'banana']

// Adding an element to the beginning of the array
fruits.unshift('orange'); // ['orange', 'apple', 'banana']

// Removing the first element
fruits.shift(); // ['apple', 'banana']

//array

let fruit = ['apple', 'banana', 'cherry', 'date'];

let slicedFruit = fruit.slice(1, 3); // ['banana', 'cherry']
console.log(slicedFruit)