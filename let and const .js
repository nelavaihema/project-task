// let can't declare but can reassignment in block scope
// reassignment 
let x = 5;
x = 15;
console.log(x); //15

// can't declare 
let y = 10;
// let y = 20;  identify error

if (true) {
  let b = 50;
  console.log(b);
}
//  hosing
// console.log(c);
// let c = 10; 
//  error before initalization 

// let with same name in different block

let a = 50;

{
  let a = 60;
  console.log(a);
}

console.log(a);
//   let with object
let user = { name: "Hema", role: "Developer" };
user.role = "Frontend Developer";
console.log(user);

// const can't decalre and reassign 
//  and it is initialze at thhe time of declare

const b= 10;
console.log(a);

//  reassign
// const x = 5;
// x = 20;

for (let i = 1; i <= 2; i++) {
  const msg = "Hello";
  console.log(msg);
}


