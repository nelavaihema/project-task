let person = {
  name: "Hema",
  age: 23,
  role: "Developer"
};

for (let key in person) {
  console.log(key, person[key]);
}


Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});


Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
