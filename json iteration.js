// JSON array as string
let jsonData = `[
  {"id":1,"name":"Hema","role":"Developer"},
  {"id":2,"name":"Anu","role":"Tester"}
]`;

// Convert JSON string to JavaScript object
let data = JSON.parse(jsonData);

// Iterate using for...of
for (let person of data) {
  console.log("ID:", person.id);
  console.log("Name:", person.name);
  console.log("Role:", person.role);
  console.log("------");
}
