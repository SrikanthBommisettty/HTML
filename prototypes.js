function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  
  let person1 = new Person('Alice');
  person1.greet();
  