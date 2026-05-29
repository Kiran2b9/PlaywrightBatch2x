
let scores = [45,82,91,60,73];

let grades = scores.map(s => s > 70 ?" pass":"fail");
console.log(grades);

// Filter - Keeps elements that pass a test

let passing = scores.filter(s => s >70);
console.log(passing);


// Reduce // reduce - accumulates to a single

let total = scores.reduce((a,b) => a + b , 0);
console.log(total);

//Flat - Flatters nested arrays

let nested = [[1,2], [3,4],[5]];
console.log(nested.flat());






/*let nested = [[1,2],[3,4],[5]];
console.log(nested.flat());*/

