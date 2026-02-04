input = "9 2"
// split(" ") breaks a string into parts using space.
let input = "9 2";
let result = input.split(" ");

console.log(result);
//  output ["9", "2"]
let a = "9";
let b = "2";
console.log(a + b);
//  92   ❌ (string concatenation)
//  Converts each string into a number
let arr = ["9", "2"];
let nums = arr.map(Number);

console.log(nums);
//  [9, 2]
// const [N, M] = input.split(" ").map(Number);
 var [N,M] = userInput[0].split(" ").map(Number);
// input.split(" ") → ["9", "2"]

// .map(Number) → [9, 2]

// [N, M] → N = 9, M = 2

//  even

var sum = N + M;
  
  if(sum%2===0)
  {
      console.log("even")
  }
  else
  {
      console.log("odd")
  }


//   divide by 7

const N1=Number(userInput[0]);
  if(N%7===0){
      console.log("yes");
  }else {
      console.log("no")
  }
//  greter power of 2

 let N=Number(userInput[0]);
  let power=1;
  while(power<=N){
      power=power*2;
  }

  console.log(power);

//   expain 
// N = 4
// power = 1

// power <= N  →  1 <= 4  → true
// 2 <= 4 → true
// power = 2 * 2 = 4


// 4 <= 4 → true
// power = 4 * 2 = 8


//   polindrom


  const s = userInput[0];
  const reversed = s.split("").reverse().join("");

  if (s === reversed) {
    console.log("yes");
  } else {
    console.log("no");
  }

  