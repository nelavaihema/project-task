// break → exit the loop

// continue → skip current iteration

// return → exit from function

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // exit loop
  }
  console.log(i); //1 2
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip this iteration
  }
  console.log(i); //1 2 4 5
}


function findFirstEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i]; // exit function
    }
  }
}

console.log(findFirstEven([1, 3, 5, 6, 8]));

// nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;
    console.log(i, j);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue;
    console.log(i, j);
  }
}

outer: for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}


