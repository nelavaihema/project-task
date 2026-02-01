// arithmetic operator 
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
//  assignment
let x = 10;
x += 5;
console.log(x);

//  comparison
console.log(10 == "10");   // true
console.log(10 === "10"); // false
console.log(5 != 3);      // true
console.log(5 > 3);       // true
console.log(5 <= 3);      // false
// logical
let c= true;
let d = false;

console.log(c && d); // false
console.log(c || d); // true or operator
console.log(!c);     // false
//  ternay 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
//  unary

// let x = 5;
console.log(++x); // 6
console.log(x--); // 6

//  spread operator
let y = [1, 2];
let z = [3, 4];
console.log([...y, ...z]);



