const person = { 
    name: 'srikanth', 
    age: 20, 
    place: 'Hyd',
    cmp: 'Ekip'
};

// accessing property
console.log(person["name"], person["age"], person["place"]);

// nested object
const student = { 
    name: 'chandu', 
    age: 20,
    marks: {
        python: 70,
        cyberSecurity: 75,
        react: 90
    }
}

// accessing property of student object
console.log(student.marks); 

// accessing property of marks object
console.log(student.marks.react);

const person1 = {
    name: 'Srikanth',
    age: 24,
    // using function as a value
    greet: function() { console.log('hello') }
}

person1.greet();
console.log(person1.name , person1.age);

//parse keyword
let number = '23.32';
let result1 = parseFloat(number);
let result2 = parseInt(number);

console.log(result1 , result2);


// constructor function
class Person7 {
    constructor() {
        this.name = 'SRI',
        this.age = 25;
    }
}

// creating objects
let person8 = new Person7();
let person9 = new Person7();

// adding new property to constructor function
Person7.prototype.gender = 'Male';
Person7.place = 'HYD'

console.log(person8.name, person8.gender, person8.place);
console.log(person9.gender);

//Getter
const students = {
    // data property
    firstName: 'srikanth',
    
    // accessor property (getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(students.firstName); 

// accessing getter property
console.log(students.getName); 

// Getting
class Rectangle {
    constructor(width, height) {
      this._width = width; // Private property
      this._height = height; // Private property
    }
  
    // Getter method for the width property
    get width() {
      return this._width;
    }
  
    // Getter method for the height property
    get height() {
      return this._height;
    }
  
    // Getter method for calculating the area
    get area() {
      return this._width * this._height;
    }
  }
  
  // Create a rectangle object
  const myRectangle = new Rectangle(10,20);
  
  // Accessing properties using getter methods
  console.log(`Width: ${myRectangle.width}`); 
  console.log(`Height: ${myRectangle.height}`); 
  console.log(`Area: ${myRectangle.area}`); 
  


