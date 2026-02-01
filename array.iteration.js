let users = [
  { name: "Hema", age: 25 },
  { name: "Ravi", age: 30 }
];

users.forEach(user => {
  console.log(user.name, user.age);
});
for (let user of users) {
  console.log(user.name);
}
