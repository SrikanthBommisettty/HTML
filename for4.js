const person = { name: 'Alice', age: 30, job: 'Engineer' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
