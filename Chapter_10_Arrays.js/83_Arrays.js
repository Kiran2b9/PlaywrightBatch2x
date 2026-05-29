
let fruit = [];
console.log(fruit);

let fruit = [10,20,30];

//Arrays- collection of data items of the same type stored in contiguous memory locations
//Declaration of an array
let arr = [1, 2, 3, 4, 5]; //array of integers
let names = ["Alice", "Bob", "Charlie"]; //array of strings

//datatype array_name[size]

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

//Accessing array elements
console.log(fruits[0]); //Output: Apple
console.log(fruits[2]); //Output: Cherry
console.log(fruits[4]); //Output: Elderberry
//Modifying array elements
fruits[1] = "Blueberry";
console.log(fruits); //Output: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]
//Array length
console.log(fruits.length); //Output: 5
//Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}