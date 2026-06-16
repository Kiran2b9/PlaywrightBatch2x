
const user = {
    name : "john",
    age : 30,
    email : "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Dynamic Property

const key = "age";
console.log(user[key]);

// Adding / modifying properties

user.city = "NYC";
user.age = 31;

console.log(user);

//console.log(Object.getOwnPropertyDescriptor(user,"name"));

