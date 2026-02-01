function myFunc() {
  let age = 25;
  console.log(age);
}

myFunc();     // 25
// console.log(age); // Error: age is not defined
//  lexical
function outer() {
  

  function inner() {
    let outerVar = "Hello";
    console.log(outerVar);
  }

  inner();
}

outer(); // Hello



// function expression
let greet = function() {
  console.log("Hi");
};
greet(); // Hi

//fucntion declaration
function greet() {
  console.log("Hello");
}
greet(); // Hello

