let person = {
  name: "Hema",
  age: 25,
  isEmployee: true,
  skills: ["React", "JS"],
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(person.name);
// console.log(person.skills[0]);
// console.log(person.address.city);
for (let key in person) {
  console.log(key, person[key]);
}

let arr = [1, 2, 3, 4];
arr.fill(2,1,3);
console.log(arr);

//  splice
let arr1 = [10,20,30,40,50];
let remove=arr.splice(1,2);
console.log(remove);
