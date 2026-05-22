
// ============================================================
// 38. Confusing Comparison Cases: == vs ===
// ============================================================
// These are the most confusing and tricky equality comparisons in JS.
// Uncomment any line to see the result in your console.

// -----------------------------------------------------------
// 1. Arrays vs Booleans / Empty Arrays (Type Coercion Magic)
// -----------------------------------------------------------
//console.log([] == ![]);        // true  -> [] is truthy, ![] is false, [] == false -> 0 == 0
//console.log([] == false);      // true  -> [] converts to "", then to 0; false is 0
//console.log([0] == false);     // true  -> [0] converts to "0", then to 0
//console.log([null] == false);  // true  -> [null] converts to "", then to 0
//console.log([undefined] == false); // true -> [undefined] converts to "", then to 0
//console.log([[[]]] == false);  // true -> nested empty array converts to "", then to 0

// -----------------------------------------------------------
// 2. Arrays vs Numbers / Strings
// -----------------------------------------------------------
//console.log([] == 0);          // true  -> [] -> "" -> 0
//console.log([] == "");         // true  -> [] -> "" 
//console.log([1,2] == "1,2");   // true  -> array toString() gives "1,2"
//console.log(["5"] == 5);       // true  -> ["5"] -> "5" -> 5
//console.log([[["5"]]] == 5);   // true  -> nested array collapses to "5" -> 5
//console.log([0] == "0");       // true  -> [0] -> "0"
//console.log(["hello"] == "hello"); // true

// -----------------------------------------------------------
// 3. Objects vs Primitives (Wrapper Objects)
// -----------------------------------------------------------
//console.log(new String("a") == "a");   // true  -> object wrapper coerces to primitive
//console.log(new String("a") === "a");  // false -> different types (object vs string)
//console.log(new Number(5) == 5);       // true  -> wrapper coerces to 5
//console.log(new Number(5) === 5);      // false -> object vs number
//console.log(new Boolean(false) == false);  // true
//console.log(new Boolean(false) === false); // false

// -----------------------------------------------------------
// 4. null and undefined (The Classic Interview Trap)
// -----------------------------------------------------------
//console.log(null == undefined);    // true  -> special case in spec
//console.log(null === undefined);   // false -> different types
//console.log(null == 0);            // false -> null does NOT coerce to 0 with ==
//console.log(null >= 0);            // true  -> but null DOES coerce to 0 with >=  !!!!
//console.log(null > 0);             // false
//console.log(null <= 0);            // true
//console.log(undefined == 0);       // false
//console.log(undefined >= 0);       // false
//console.log(undefined > 0);        // false

// -----------------------------------------------------------
// 5. NaN (Not a Number) - The Oddball
// -----------------------------------------------------------
//console.log(NaN == NaN);           // false -> NaN is never equal to anything, even itself
//console.log(NaN === NaN);          // false
//console.log(Object.is(NaN, NaN));  // true  -> Object.is is the reliable check
//console.log(isNaN("hello"));       // true  -> old isNaN coerces first
//console.log(Number.isNaN("hello")); // false -> Number.isNaN does NOT coerce

// -----------------------------------------------------------
// 6. Booleans vs Strings / Numbers
// -----------------------------------------------------------
//console.log(true == "1");          // true  -> true is 1, "1" is 1
//console.log(true == "2");          // false -> true is 1, "2" is 2
//console.log(true == 1);            // true
//console.log(true === 1);           // false
//console.log(false == "0");         // true  -> false is 0, "0" is 0
//console.log(false == 0);           // true
//console.log(false === 0);          // false
//console.log(false == "");         // true  -> "" is 0, false is 0
//console.log(false == []);         // true  -> [] -> "" -> 0, false is 0
//console.log(false == "  ");        // true  -> "  " coerces to 0

// -----------------------------------------------------------
// 7. Strings vs Numbers with Whitespace
// -----------------------------------------------------------
//console.log("\t\r\n" == 0);      // true  -> whitespace string becomes 0
//console.log("   " == 0);          // true  -> empty-ish string becomes 0
//console.log("\n" == 0);           // true
//console.log("0" == false);        // true  -> "0" is 0, false is 0
//console.log("" == false);         // true  -> "" is 0, false is 0
//console.log("" == 0);             // true
//console.log("0" == 0);            // true
//console.log("5" == 5);            // true
//console.log("5" === 5);           // false

// -----------------------------------------------------------
// 8. +0 and -0 (Almost the same... but not quite)
// -----------------------------------------------------------
//console.log(+0 == -0);            // true
//console.log(+0 === -0);           // true
//console.log(Object.is(+0, -0));   // false  -> Object.is can tell them apart
//console.log(1 / +0 === 1 / -0);   // false  -> Infinity !== -Infinity

// -----------------------------------------------------------
// 9. Reference Equality (Objects, Arrays, Functions)
// -----------------------------------------------------------
//console.log([] == []);            // false -> different references
//console.log([] === []);           // false
//console.log({} == {});            // false -> different references
//console.log({} === {});           // false
//console.log(function(){} == function(){});   // false
//console.log(function(){} === function(){});  // false

// Same reference = true
// let a = {}; let b = a;
// console.log(a == b);  // true
// console.log(a === b); // true

// -----------------------------------------------------------
// 10. typeof null - The Historical Bug (Bonus)
// -----------------------------------------------------------
//console.log(typeof null);         // "object" -> famous JS bug, null is NOT an object
//console.log(null instanceof Object);  // false -> proves it's not really an object

// -----------------------------------------------------------
// 11. Object.is() vs ===  (ES6 - handles edge cases better)
// -----------------------------------------------------------
//console.log(Object.is(5, 5));            // true
//console.log(Object.is("5", "5"));        // true
//console.log(Object.is({}, {}));          // false  -> still reference check
//console.log(Object.is(NaN, NaN));        // true   -> fixes NaN
//console.log(Object.is(+0, -0));          // false  -> fixes +0/-0

// -----------------------------------------------------------
// 12. Special/Tricky Coercions
// -----------------------------------------------------------
//console.log([undefined] == "");       // true
//console.log([null] == "");            // true
//console.log([undefined] == 0);        // true
//console.log([null] == 0);             // true
//console.log([undefined] == null);    // false -> [undefined] -> "", null != ""
//console.log([null] == null);          // false -> [null] -> "", null != ""
//console.log([undefined] == undefined); // false -> [undefined] -> "", undefined != ""

// -----------------------------------------------------------
// GOLDEN RULE: Use === (strict equality) ALWAYS.
// Use == only if you fully understand the coercion rules.
// When in doubt: console.log() it out!
// -----------------------------------------------------------
