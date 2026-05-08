// JavaScript Identifiers - Complete Examples

// ============================================
// 1. VALID IDENTIFIERS
// ============================================

// Starting with a letter
let name = "John";
let Name = "Doe";       // Case-sensitive (different from 'name')
let userName = "John";
let user_name = "John";

// Starting with underscore
let _private = 10;
let _ = "underscore";
let _123 = "starts with underscore";

// Starting with dollar sign
let $price = 99.99;
let $ = "dollar";
let $element = document.body;

// Subsequent characters can include digits
let user1 = "User One";
let user2 = "User Two";
let item1_price = 100;
let $value2 = 200;

// ============================================
// 2. CASE SENSITIVITY
// ============================================

let product = "Apple";
let Product = "Banana";
let PRODUCT = "Cherry";

// All three are different variables
console.log(product);   // "Apple"
console.log(Product);   // "Banana"
console.log(PRODUCT);   // "Cherry"

// ============================================
// 3. INVALID IDENTIFIERS (Commented out - will cause errors)
// ============================================

// let 1user = "John";       // Error: Cannot start with a digit
// let 123 = 456;            // Error: Cannot start with a digit

// let my name = "John";     // Error: Cannot contain spaces
// let my-name = "John";     // Error: Cannot use hyphens

// let @user = "John";       // Error: Cannot use @
// let #hash = "tag";        // Error: Cannot use #
// let !flag = true;         // Error: Cannot use !

// let class = "Math";       // Error: Cannot use reserved keywords
// let return = 5;           // Error: Cannot use reserved keywords
// let function = () => {};  // Error: Cannot use reserved keywords
// let let = 10;             // Error: Cannot use reserved keywords
// let const = 20;           // Error: Cannot use reserved keywords
// let if = true;            // Error: Cannot use reserved keywords

// ============================================
// 4. UNICODE IDENTIFIERS (Valid but not recommended)
// ============================================

let üser = "Unicode name";    // Valid but not recommended
let π = 3.14159;              // Valid but not recommended
let 用户名 = "User";           // Valid but not recommended
let नाम = "Name";             // Valid but not recommended

console.log(üser, π, 用户名, नाम);

// ============================================
// 5. SPECIAL CASE: BRACKET NOTATION FOR PROPERTIES
// ============================================

let person = {};

// Using strings with special characters as property keys
person["first-name"] = "John";    // Hyphen is allowed inside quotes
person["my name"] = "John Doe";   // Space is allowed inside quotes
person["1stPlace"] = "Gold";      // Starting with digit is allowed inside quotes
person["@handle"] = "@john";      // Special characters allowed inside quotes

console.log(person["first-name"]);
console.log(person["my name"]);

// ============================================
// 6. CONVENTION: MEANINGFUL AND CONCISE NAMES
// ============================================

// Good examples
let userAge = 25;
let totalPrice = 150.00;
let isActive = true;
let MAX_USERS = 100;              // Constants often use UPPER_SNAKE_CASE
let calculateTotal = () => {};    // camelCase for functions

// Bad examples (avoid these)
let a = 25;                       // Too short, not meaningful
let veryLongVariableNameThatDescribesEverything = 10;  // Too long
let x1 = true;                    // Not descriptive
let data = "info";                // Too generic

// ============================================
// 7. UNDERSCORE AND DOLLAR SIGN CONVENTIONS
// ============================================

// Underscore prefix often indicates "private" or internal
let _internalCount = 0;
let _privateMethod = function() {};

// Dollar sign often used for DOM elements or jQuery-like variables
let $header = null;
let $button = null;
let $input = null;

// ============================================
// 8. IDENTIFIER LENGTH
// ============================================

let x = 1;                          // Very short
let counter = 1;                    // Short and meaningful
let loopCounterForUserListIteration = 1;  // Too long, avoid

// ============================================
// 9. CONSTANTS
// ============================================

const PI = 3.14159;
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";

// ============================================
// 10. FUNCTION NAMES AS IDENTIFIERS
// ============================================

function greetUser() {}
function calculateSum() {}
function _internalHelper() {}
function $getElement() {}

// ============================================
// 11. CLASS NAMES (PascalCase convention)
// ============================================

class User {}
class BankAccount {}
class _InternalHelper {}

// ============================================
// SUMMARY OUTPUT
// ============================================

console.log("\n=== Identifier Examples Summary ===");
console.log("Valid letters:", name, Name, userName);
console.log("Valid underscore:", _private, _123);
console.log("Valid dollar:", $price, $element);
console.log("Valid with digits:", user1, item1_price);
console.log("Case sensitive:", product, Product, PRODUCT);
console.log("Constants:", PI, MAX_RETRY_COUNT);
console.log("Bracket notation object:", person);
console.log("Unicode (not recommended):", üser, π);
