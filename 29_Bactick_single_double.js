// 29_Bactick_single_double.js
// Differences between backtick, single, and double quotes in JavaScript

// 1. Single ('') & Double ("") quotes: Same behavior - plain strings, no interpolation.
let single = 'Hello single';
let double = "Hello double";

// 2. Backtick (``): Template literals - support interpolation & multiline.
let name = "Kiran";
let backtick = `Hello ${name}`; // variable interpolation
let multiline = `Line 1
Line 2`; // multiline support

// Quick test
console.log("Single :", single);
console.log("Double :", double);
console.log("Backtick:", backtick);
console.log("Multiline:\n" + multiline);

// 1-Line Explanation:
// Single & double quotes are identical for plain text; backticks add interpolation `${}` and multiline strings.
