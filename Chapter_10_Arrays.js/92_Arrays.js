
let fruit = ["banana","apple","cherry"];
fruit.sort();
console.log(fruit);


let number = [3,1,4];
number.sort();
console.log(number);

//Natural sorting, Lexical Sorting

let nums = [10,1,21,2];
nums.sort();
console.log(nums);

nums.sort((a,b) => a -b); // Ascending
console.log(nums);

nums.sort((a , b) => b - a); // Descending
console.log(nums);