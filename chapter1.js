console.log("Hello World")

var a = 10;
var a = 60
console.log(a)

function greet(Alice, greeting = "Hello") {
    return `${greeting}, ${Alice}!`;
  }
  
  // Test cases
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"


  function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  // Test cases
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5)); // 5


  const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Merging the arrays
const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]




 const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}



const name = "Alice";
const age = 25;

// Creating the message using template literals
const message = `My name is ${Alice} and I am ${25} years old.`;

console.log(message); // "My name is Alice and I am 25 years old."



const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`${student.name}: ${student.grade}`);
  }

  


  const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const number of innerArray) {
      sum += number;
    }
    console.log(`Sum of [${innerArray}] is ${sum}`);
  }

  


  const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: "The sum of 5 and 10 is 15."




  
  