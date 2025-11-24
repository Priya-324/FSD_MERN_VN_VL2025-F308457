let numbers = [10, 25, 30, 5, 40];
let sum = numbers.reduce((a, b) => a + b, 0);
let largest = Math.max(...numbers);
console.log("Sum:", sum);
console.log("Largest number:", largest);