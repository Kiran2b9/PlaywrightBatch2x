//Write a program that classifies a triangle based on its side lengths. 
//Given three input values representing the lengths of the sides, 
//determine if the triangle is equilateral (all sides are equal), 
//isosceles (exactly two sides are equal), or scalene (no sides are equal). 
//Use an if-else statement to classify the triangle.

let a = 7;
let b = 7;
let c = 2;

if(a == b && b == c){
    console.log("triangle is equilateral");
}else if(a == b || b == c || a == c){
    console.log("isosceles triangle");
}else {
    console.log("scalene triangle");
}