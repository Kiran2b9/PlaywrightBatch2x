
// Checking Array

// check if something an array

let result = Array.isArray([1,2,3]);
console.log(result);

let result1 = Array.isArray(["a"]);
console.log(result1);


// Every & Some

[80,90,85].every (s => s >= 70); // true
[80,60,85]. every (s => s >=70 ); // false
 
// Playwright API

[200,201,203].every (statuscode => statuscode > 200);

// Some AT LEAST one must pass

[80,60,85].some (s => s < 70); //true 
[80,90,85]. some (s => s < 70 ); // false
