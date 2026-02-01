// collection of values stored in a single variable

let numbers = [1, 2, 3, 4, 5];
let names = ["Hema", "Anu", "Ravi"];
let mixed = [1, "Hello", true, null];
console.log(numbers[0]); // 1
console.log(names[2]);   // Ravi


//  push
let arr = [1, 2];
arr.push(3);
console.log(arr);


let nums = [10, 20, 30, 40];
console.log(nums.slice(1, 3)); //[20,30]


let doubled = nums.map(n => n * 2);
console.log(doubled);

// reduce 
let sum = nums.reduce((a, b) => a + b, 0);
console.log(sum);

