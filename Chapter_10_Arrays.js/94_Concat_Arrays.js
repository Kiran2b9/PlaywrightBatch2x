
let a = [1,2];
let b = [3,4];

let c = a.concat(b);
console.log(c);

// Spread (Modern way) - Concatenation (...)
let d = [...a, ...b];
console.log(d);

// JOIN

let s = ["pass","fail","skip"].join("  ");
console.log(s);