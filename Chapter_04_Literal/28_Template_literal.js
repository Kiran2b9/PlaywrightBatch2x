
let firstName = "Rahul";
let fullName = `His name is ${firstName} Kumar.`;

console.log(fullName);

let env = "staging";
env = "prod";
let userId = 12345;
let apiUrl = `https://api-${env}.tekion.com/user/${userId}`;

console.log(apiUrl);