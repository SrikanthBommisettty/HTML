// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Variable declarations
let sum = 0;
let product = 1;
let evenNumbers = [];
let oddNumbers = [];

// Loop through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  // Condition to check if the number is even or odd
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }

  // Accumulate the sum and product of numbers
  sum += num;
  product *= num;
}

// Output the results
console.log("Array of Numbers:", numbers);
console.log("Sum of Numbers:", sum);
console.log("Product of Numbers:", product);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// Using forEach loop to iterate and display each number
console.log("Numbers using forEach:");
numbers.forEach(function (num) {
  console.log(num);
});

// Using while loop to find the maximum number in the array
let max = numbers[0];
let index = 1;
while (index < numbers.length) {
  if (numbers[index] > max) {
    max = numbers[index];
  }
  index++;
}
console.log("Maximum Number:", max);

// Using a do...while loop to find the minimum number in the array
let min = numbers[0];
index = 1;
do {
  if (numbers[index] < min) {
    min = numbers[index];
  }
  index++;
} while (index < numbers.length);
console.log("Minimum Number:", min);

// Continuing from the previous code

// Using pop to remove the last element from the array
const removedElement = numbers.pop();
console.log("Removed Element using pop:", removedElement);
console.log("Array after pop:", numbers);

// Using map to create a new array of squared numbers
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log("Squared Numbers using map:", squaredNumbers);

// Using shift to remove the first element from the array
const shiftedElement = numbers.shift();
console.log("Removed Element using shift:", shiftedElement);
console.log("Array after shift:", numbers);


// Using concat to combine two arrays
const moreNumbers = [9, 10, 11];
const combinedNumbers = numbers.concat(moreNumbers);
console.log("Combined Numbers using concat:", combinedNumbers);

// Using copyWithin to copy elements within the same array
const copiedNumbers = numbers.copyWithin(0, 4, 6);
console.log("Copied Numbers using copyWithin:", copiedNumbers);

// Using every to check if all numbers are even
const allEven = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log("All numbers are even:", allEven);

// Using filter to get even numbers
const evenArray = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Even Numbers using filter:", evenArray);

// Using flat to flatten a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(Infinity);
console.log("Flattened Array using flat:", flatArray);

// Using flatMap to map and flatten an array
const flatMappedArray = numbers.flatMap(function (num) {
  return [num, num * 2];
});
console.log("Flat-Mapped Array using flatMap:", flatMappedArray);

// Using forEach to iterate and display each number
console.log("Numbers using forEach:");
numbers.forEach(function (num) {
  console.log(num);
});

// Using indexOf to find the index of an element
const indexOfFive = numbers.indexOf(5);
console.log("Index of 5:", indexOfFive);

// Using lastIndexOf to find the last index of an element
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log("Last Index of 3:", lastIndexOfThree);


// Using reverse to reverse the array
const reversedNumbers = numbers.slice().reverse();
console.log("Reversed Numbers using reverse:", reversedNumbers);

// Using slice to create a subset of the array
const subset = numbers.slice(2, 6);
console.log("Subset using slice:", subset);

// Using some to check if at least one number is even
const someEven = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log("At least one number is even:", someEven);

// Using sort to sort the array in ascending order
const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("Sorted Numbers using sort:", sortedNumbers);

// Using splice to remove and insert elements in the array
const splicedArray = numbers.slice();
splicedArray.splice(2, 2, 9, 10);
console.log("Spliced Array using splice:", splicedArray);
