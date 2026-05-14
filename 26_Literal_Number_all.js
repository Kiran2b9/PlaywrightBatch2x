// Lab 26: All Number Types in JavaScript

// 1. Integer Literal (Decimal)
let age = 25;
console.log("Integer:", age, "| Type:", typeof age);

// 2. Floating-Point Literal
let price = 19.99;
console.log("Float:", price, "| Type:", typeof price);

// 3. Negative Number
let temperature = -10;
console.log("Negative:", temperature, "| Type:", typeof temperature);

// 4. Scientific Notation (Exponential)
let distance = 1.5e5; // 150000
console.log("Scientific:", distance, "| Type:", typeof distance);

// 5. Hexadecimal Literal (Base 16) - starts with 0x or 0X
let hexColor = 0xFF;
console.log("Hexadecimal:", hexColor, "| Type:", typeof hexColor);

// 6. Binary Literal (Base 2) - starts with 0b or 0B
let binaryNum = 0b1010;
console.log("Binary:", binaryNum, "| Type:", typeof binaryNum);

// 7. Octal Literal (Base 8) - starts with 0o or 0O
let octalNum = 0o17;
console.log("Octal:", octalNum, "| Type:", typeof octalNum);

// 8. BigInt Literal - suffix with n
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);

// 9. Infinity (Positive)
let positiveInfinity = Infinity;
console.log("Infinity:", positiveInfinity, "| Type:", typeof positiveInfinity);

// 10. Infinity (Negative)
let negativeInfinity = -Infinity;
console.log("-Infinity:", negativeInfinity, "| Type:", typeof negativeInfinity);

// 11. NaN - Not a Number
let notANumber = NaN;
console.log("NaN:", notANumber, "| Type:", typeof notANumber);
