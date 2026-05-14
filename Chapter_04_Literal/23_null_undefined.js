/*
  NULL vs UNDEFINED in JavaScript (Simple Explanation)
  =====================================================

  UNDEFINED:
  -----------
  - Meaning: "I don't have a value yet" or "This doesn't exist"
  - It is automatically assigned by JavaScript
  - Examples where you get undefined:
      1. When you declare a variable but don't assign a value
      2. When a function doesn't return anything
      3. When you try to access an object property that doesn't exist
      4. When a function parameter is not provided

  NULL:
  ------
  - Meaning: "I intentionally want this to be empty" or "There is no value here"
  - It is manually assigned by the programmer (YOU)
  - It is an assignment value that represents "no value" or "empty"

  KEY DIFFERENCE (Easy way to remember):
  =======================================
  - undefined = JavaScript is saying "I don't know what this is"
  - null      = You are saying "I want this to be nothing"

  TYPE DIFFERENCE:
  ================
  - typeof undefined  --> "undefined"
  - typeof null       --> "object"  (This is a known bug in JavaScript since the beginning!)
*/

// ==========================================
// Examples of UNDEFINED
// ==========================================

// 1. Variable declared but not assigned
let userName;
console.log("1. userName:", userName);           // undefined

// 2. Function with no return statement
function sayHello() {
    // no return
}
let result = sayHello();
console.log("2. sayHello() return:", result);     // undefined

// 3. Accessing non-existent property
let person = { name: "Alice" };
console.log("3. person.age:", person.age);        // undefined

// 4. Missing function parameter
function greet(name) {
    console.log("4. greet() name:", name);        // undefined if no argument passed
}
greet();

// ==========================================
// Examples of NULL
// ==========================================

// 1. Intentionally setting a variable to "no value"
let emptyBox = null;
console.log("5. emptyBox:", emptyBox);              // null

// 2. Resetting a variable to clear its value
let tempData = "some data";
tempData = null;  // programmer explicitly says "I want this empty"
console.log("6. tempData:", tempData);              // null

// ==========================================
// TYPE CHECKING
// ==========================================

console.log("\n--- typeof check ---");
console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);           // "object" (historical JS bug!)

// To properly check for null:
console.log("null === null:", null === null);       // true

// ==========================================
// COMPARISON
// ==========================================

console.log("\n--- Comparisons ---");
console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality - different types!)

/*
  SUMMARY TABLE:
  ==============

  | Feature        | undefined                 | null                    |
  |----------------|---------------------------|-------------------------|
  | Meaning        | Not assigned yet          | Intentionally empty     |
  | Set by         | JavaScript automatically  | Programmer manually     |
  | Type           | undefined                 | object (bug)            |
  | == comparison  | true with null            | true with undefined     |
  | === comparison | false with null           | false with undefined    |

  When to use what?
  -----------------
  - Don't assign undefined manually (let JS handle it)
  - Use null when YOU want to say "this is intentionally empty"
*/
