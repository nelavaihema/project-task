// Function-scoped, can re-declare & re-assign

// declare
var a = 10;
console.log(a); //10

// reclare 
var x = 5;
var x = 20;
console.log(x); // 20

// reassign 
var y = 10;
y = 30;
console.log(y); //30

// Hosting 
console.log(a);
var a = 10;  //10

// var inside of function 
function test() {
  var b = 50;
  console.log(b);
}
test(); //50

// var inside block 
if (true) {
  var c = 100;
}
console.log(c); //100

// var in global 
var name = "Hema";

function show() {
  console.log(name);
}
show();

// var can redclare so we if we declare inside also output will come 






