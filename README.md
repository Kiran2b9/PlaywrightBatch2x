# Playwright Batch 2x - Learning Repository

This repository contains learning materials and code examples for the **Playwright Batch 2x** course. It covers JavaScript fundamentals, identifiers, literals, operators, control flow, user input, and development tools reference.

---

## Repository Structure

```
LearnPlaywrightBatch2x/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_verify_setup.js
│   ├── 04_HotCode.js
│   ├── 05_JS_Basics.js
│   ├── 06_Identifiers_Rules.js
│   ├── 07_Identifiers_part2.js
│   ├── 08_Comments.js
│   └── 09_Var_Let_Const.js
│
├── chapter_02_Javascript_Concept/
│   ├── 10_Function.js
│   ├── 11_Let_People_Love.js
│   ├── 12_Var_Explained.js
│   ├── 13_Const_Explaned.js
│   ├── 14_Var_Functionscoped.js
│   ├── 15_Let_Scope.js
│   ├── 16_Hoisting.js
│   ├── 17_Hoisting_Fn.js
│   ├── 18_Let_Hoisting.js
│   ├── 19_Let_Hoisting_Block.js
│   ├── 20_Let_Const.js
│   └── 21_Jr_QA.js
│
├── chapter_03_Identifier_Literals/
│   ├── identifier_examples.js
│   ├── 07_identifier_Part2.js
│   └── vs_code_keyboard_shortcut_windows.md
│
├── Chapter_04_Literal/
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_String.js
│   ├── 28_Template_literal.js
│   └── 29_Bactick_single_double.js
│
├── Chapter_05_Operator/
│   ├── 30_Operator.js
│   ├── 31_Arithmetic_OP.js
│   ├── 32_Moudulu_OP.js
│   ├── 33_Expo_OP.js
│   ├── 34_IQ.js
│   ├── 35_Comparison_OP.js
│   ├── 36_Comarison_Strict_Loose.js
│   ├── 37_Loose_Strict.js
│   ├── 38_Confusing_Comparsion.js
│   ├── 39_Logical_Op.js
│   ├── 40_String_Cont_Op.js
│   ├── 41_Ternary_OP.js
│   ├── 42_Type_OP.js
│   ├── 43_Incre_Decre_OP.js
│   ├── 44_Null_OP.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_Incre_Decre.js
│   └── 47_Advance_Incre_Decre.js
│
├── Chapter_06_IF_Else/
│   ├── 48_If_Else.js
│   ├── 49_If_Elseif_Else.js
│   ├── 50_REAL_IF_ELSE.js
│   ├── 51_API_IF_ELSE.js
│   ├── 52_IQ_IF_Else.js
│   ├── 53_If_Else_REAL.js
│   ├── 54_IQ.js
│   ├── 55_IF_Else.js
│   ├── 56_IQ_EVEN_ODD.js
│   ├── 57_Grade_Calc.js
│   └── 58_LEAP_YEAR.js
│
├── Chapter_07_Switch_Statement/
│   ├── 59_Switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_Real_Time_Example.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ.js
│   ├── 65_IQ_2.js
│   ├── 66_IQ_3.js
│   └── 67_IQ_4.js
│
├── Chapter_08_Userinput
│   ├── 68_userinput.js
│   ├── 69_Read_line.js
│   └── 70_Prompt_sync.js
│
├── Chapter_9_LOOPS.js
│   ├── 71_For_Loop.js
│   ├── 72_For_Loop.js
│   ├── 73_Foor_Loop2.js
│   ├── 74_IQ.js
│   ├── 75_For_OF_IN_EACH.js
│   ├── 76_While.js
│   ├── 77_Do_While.js
│   ├── 78_Do_While.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   └── 82_IQ.js
│
├── Chapter_10_Arrays.js
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Array.js
│   ├── 86_Arrays_Adding_Removing.js
│   ├── 87_Adding_Removing.js
│   ├── 88_REAL_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   ├── 91_Transform_Array.js
│   ├── 92_Arrays.js
│   ├── 93_Arrays_Slicing.js
│   ├── 94_Concat_Arrays.js
│   └── 95_Array_Checking.js
│
├── Chapter_11_Function
│   ├── 96_Function.js
│   ├── 97_Type1_FN_Basics_Function.js
│   ├── 98_Type2_FN_With_Parameter_Noreturn.js
│   ├── 99_Type3_FN_Without_Parameter_Return_type.js
│   ├── 100_Type4_FN_With_Parameter_With_Return.js
│   ├── 101_Template_Literal.js
│   ├── 102_FN_Expression.js
│   ├── 103_Arrow.js
│   ├── 104_Arrow_Fn_REAL.js
│   ├── 105_IIFE.js
│   ├── 106_Default_Param_FN.js
│   ├── 107_IQ.js
│   ├── 108_Rest_Param_Fn.js
│   ├── 109_IQ.js
│   ├── 110_Spread_IQ.js
│   ├── 111_SCOPE_FN.js
│   ├── 112_IQ.js
│   ├── 113_Closures.js
│   ├── 114_Closure.js
│   ├── 115_API_REAL_Closure.js
│   ├── 116_Higher_Order_FN.js
│   └── 117_Pure_FN.js
│
├── Chapter_12_Strings/
│   ├── 118_Strings.js
│   ├── 119_Strings_Properties.js
│   ├── 120_Search_Check_Str.js
│   ├── 121_Substring.js
│   ├── 122_Transform_Str.js
│   ├── 123_String_Conversion.js
│   └── javascript_string_cheat_sheet.md
│
├── Chapter_13_Object/
│   ├── 124_Object.js
│   ├── 125_Objects2.js
│   ├── 126_Object_Creation.js
│   ├── 127_Object_REAL.js
│   ├── 128_Primitive_Ref.js
│   ├── 129_Object_Examples.js
│   ├── 130_IQ.js
│   ├── 131_Object_Function.js
│   ├── 132_Object_Decon.js
│   ├── 133_Spread.js
│   ├── 134_Object_Get_Set_Method.js
│   ├── 135_IQ.js
│   ├── 136_Obj_REAL.js
│   └── 137_Let_Const_Obj.js
│
├── Chapter_14_2D_Array/
│   ├── 138_2D_Array.js
│   ├── 139_2d.js
│   ├── 140_REAL.js
│   ├── 141_2D_Array_FN.js
│   ├── 142_Right_Pattern_Py.js
│   └── testdata.csv
│
├── Chapter_15_Callback/
│   ├── 143_Callback.js
│   ├── 144_CB.js
│   ├── 145_CB_FN.js
│   ├── 146_PW_CB.js
│   ├── 147_JS_CB.js
│   ├── 148_Sync_CB.js
│   ├── 149_Async_CB.js
│   ├── 150_Hell_CB.js
│   ├── 151_CB_Hell_20_step.js
│   ├── 152_CB_Param.js
│   └── 153_CB_Return.js
│
├── Chapter_16_Promise/
│   ├── 154_Promise.js
│   ├── 155_REAL_API.js
│   ├── 156_Promise_REAL_API_PART2.js
│   ├── 157_Finally.js
│   ├── 158_Call_Pyramid_Problem.js
│   ├── 159_Promise_All.js
│   └── 160_Promise_IQ.js
│
├── Chapter_17_Async_Await/
│   ├── 161_Async.js
│   ├── 162_Async_P2.js
│   ├── 163_Py_of_DOM.js
│   ├── 164_Async.js
│   ├── 165_Async_Parallel.js
│   ├── 165_Async_Seq.js
│   └── 166_IQ.js
│
├── Chapter_18_Playwright_Basics/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── sdetlive.pdf
│
├── Task_20th_May/
│   ├── Qe_1.js
│   ├── Qe_2.js
│   ├── Qe_3.js
│   ├── Qe_4.js
│   └── Qe_5.js
│
├── Task_23rd_May/
│   ├── 1_IQ.js
│   └── 2_IQ.js
│
├── Test_03rd_Jun/
│   └── QE_1.js
│
├── interview.md
├── javascript_string_cheat_sheet.md
├── string_cheat_sheet.md
└── README.md
```

---

## Chapters Overview

### Chapter 01: Basics
Introduction to JavaScript fundamentals:
- Console output
- Variable declaration (`var`)
- Basic syntax and setup verification
- Identifiers and naming rules
- Comments

### Chapter 02: JavaScript Concepts
Core JavaScript concepts:
- Functions and function declarations
- `var`, `let`, and `const` deep dive
- Scope (function scope vs block scope)
- Hoisting (variables and functions)
- Junior QA interview questions

### Chapter 03: Identifiers & Literals
Comprehensive guide to JavaScript identifiers and naming conventions:
- **identifier_examples.js** - Valid and invalid identifier examples, case sensitivity, Unicode support
- **07_identifier_Part2.js** - Detailed examples for all naming conventions with usage guide
- **vs_code_keyboard_shortcut_windows.md** - Complete VS Code keyboard shortcuts reference for Windows

### Chapter 04: Literals & Strings
JavaScript literals and string examples:
- **22_Literal.js** - Literal basics
- **23_null_undefined.js** - Null and undefined differences
- **24_null.js** - Null in detail
- **25_Literal_All.js** - All literal types overview
- **26_Literal_Number_all.js** - Number literals
- **27_String.js** - String basics
- **28_Template_literal.js** - Template literals with backticks
- **29_Bactick_single_double.js** - Difference between backtick, single, and double quotes

### Chapter 05: Operators
All JavaScript operators covered:
- Arithmetic operators
- Modulus and exponentiation operators
- Comparison operators (loose vs strict)
- Logical operators
- String concatenation
- Ternary operator
- Type operators (`typeof`, `instanceof`)
- Increment and decrement operators
- Nullish coalescing operator (`??`)
- Interview questions and advanced examples

### Chapter 06: If / Else Statements
Control flow with conditional statements:
- Basic `if...else`
- `if...else if...else` chains
- Real-world and API-related examples
- Interview questions (IQ)
- Practical programs: Grade Calculator, Leap Year checker, Even/Odd checker

### Chapter 07: Switch Statement
Switch-case control flow:
- Basic switch syntax
- Break and default cases
- Real-time examples
- Grouped cases
- Interview questions (IQ)

### Chapter 08: User Input
Handling user input in JavaScript:
- **68_userinput.js** - User input basics
- **69_Read_line.js** - Reading input via `readline`
- **70_Prompt_sync.js** - Synchronous prompts

### Chapter 9: Loops
Looping constructs and iterations:
- **71_For_Loop.js** - For loop basics
- **72_For_Loop.js** - For loop variations
- **73_Foor_Loop2.js** - Advanced for loop examples
- **74_IQ.js** - Loop interview questions
- **75_For_OF_IN_EACH.js** - For...of and For...in loops
- **76_While.js** - While loop
- **77_Do_While.js** - Do...while loop basics
- **78_Do_While.js** - Do...while variations
- **79_IQ.js** through **82_IQ.js** - Loop interview questions

### Chapter 10: Arrays
Array methods and operations:
- **83_Arrays.js** - Array basics
- **84_Arrays.js** - Array variations
- **85_Access_Array.js** - Accessing array elements
- **86_Arrays_Adding_Removing.js** - Adding and removing elements
- **87_Adding_Removing.js** - More adding/removing examples
- **88_REAL_Example.js** - Real-world array examples
- **89_Searching.js** - Searching arrays
- **90_Iterate.js** - Iterating over arrays
- **91_Transform_Array.js** - Transforming arrays
- **92_Arrays.js** - Sorting arrays
- **93_Arrays_Slicing.js** - Slicing arrays
- **94_Concat_Arrays.js** - Concatenating arrays (concat and spread operator)
- **95_Array_Checking.js** - Checking if a value is an array

### Chapter 11: Functions
Function types and modern JavaScript features:
- **96_Function.js** - Function basics and definition
- **97_Type1_FN_Basics_Function.js** - Basic function declarations
- **98_Type2_FN_With_Parameter_Noreturn.js** - Functions with parameters but no return
- **99_Type3_FN_Without_Parameter_Return_type.js** - Functions without parameters but with return
- **100_Type4_FN_With_Parameter_With_Return.js** - Functions with parameters and return values
- **101_Template_Literal.js** - Template literals in functions
- **102_FN_Expression.js** - Function expressions
- **103_Arrow.js** - Arrow functions
- **104_Arrow_Fn_REAL.js** - Real-world arrow function examples
- **105_IIFE.js** - Immediately Invoked Function Expressions
- **106_Default_Param_FN.js** - Default parameters in functions
- **107_IQ.js** - Function interview questions
- **108_Rest_Param_Fn.js** - Rest parameters
- **109_IQ.js** - Function interview questions
- **110_Spread_IQ.js** - Spread operator interview questions
- **111_SCOPE_FN.js** - Function scope
- **112_IQ.js** - Scope interview questions
- **113_Closures.js** - Closures basics
- **114_Closure.js** - Closure examples
- **115_API_REAL_Closure.js** - Real-world API closure example
- **116_Higher_Order_FN.js** - Higher-order functions
- **117_Pure_FN.js** - Pure functions

### Chapter 12: Strings
String operations and methods:
- **118_Strings.js** - String basics
- **119_Strings_Properties.js** - String properties
- **120_Search_Check_Str.js** - Searching and checking strings
- **121_Substring.js** - Substring extraction
- **122_Transform_Str.js** - String transformation
- **123_String_Conversion.js** - String conversion

### Chapter 13: Objects
JavaScript objects in depth:
- **124_Object.js** - Object basics
- **125_Objects2.js** - Object variations
- **126_Object_Creation.js** - Object creation patterns
- **127_Object_REAL.js** - Real-world object examples
- **128_Primitive_Ref.js** - Primitives vs reference types
- **129_Object_Examples.js** - Object examples
- **130_IQ.js** - Object interview questions
- **131_Object_Function.js** - Object methods and functions
- **132_Object_Decon.js** - Object destructuring
- **133_Spread.js** - Spread operator with objects
- **134_Object_Get_Set_Method.js** - Getters and setters
- **135_IQ.js** - Object interview questions
- **136_Obj_REAL.js** - Real-world object scenarios
- **137_Let_Const_Obj.js** - Objects with let and const

### Chapter 14: 2D Arrays
Two-dimensional arrays and patterns:
- **138_2D_Array.js** - 2D array basics
- **139_2d.js** - 2D array examples
- **140_REAL.js** - Real-world 2D array usage
- **141_2D_Array_FN.js** - 2D array functions
- **142_Right_Pattern_Py.js** - Right angle pattern (pyramid)
- **testdata.csv** - Test data in CSV format

### Chapter 15: Callbacks
Callback functions, sync vs async:
- **143_Callback.js** - Callback basics
- **144_CB.js** - Callback examples
- **145_CB_FN.js** - Callback functions
- **146_PW_CB.js** - Playwright-style callbacks
- **147_JS_CB.js** - JavaScript callbacks
- **148_Sync_CB.js** - Synchronous callbacks
- **149_Async_CB.js** - Asynchronous callbacks
- **150_Hell_CB.js** - Callback hell
- **151_CB_Hell_20_step.js** - Deep callback hell example
- **152_CB_Param.js** - Callback parameters
- **153_CB_Return.js** - Callback return values

### Chapter 16: Promises
Promise-based asynchronous programming:
- **154_Promise.js** - Promise basics
- **155_REAL_API.js** - Real API promise example
- **156_Promise_REAL_API_PART2.js** - Advanced promise API
- **157_Finally.js** - Promise finally method
- **158_Call_Pyramid_Problem.js** - Callback pyramid problem
- **159_Promise_All.js** - Promise.all usage
- **160_Promise_IQ.js** - Promise interview questions

### Chapter 17: Async / Await
Async/await for cleaner asynchronous code:
- **161_Async.js** - Async function basics
- **162_Async_P2.js** - Async part 2
- **163_Py_of_DOM.js** - Pyramid of DOM async example
- **164_Async.js** - Async patterns
- **165_Async_Parallel.js** - Parallel async execution
- **165_Async_Seq.js** - Sequential async execution
- **166_IQ.js** - Async interview questions

### Chapter 18: Playwright Basics
Introduction to Playwright for browser automation:
- **package.json** - Project dependencies (Playwright ^1.61.0)
- **sdetlive.pdf** - Reference material

### Task: 20th May
Practice tasks and exercises:
- **Qe_1.js** through **Qe_5.js** - Assorted coding questions and solutions

### Task: 23rd May
Additional practice tasks:
- **1_IQ.js** through **2_IQ.js** - Interview questions and coding challenges

### Test: 03rd Jun
Assessment tasks:
- **QE_1.js** - Coding assessment question

### Additional Resources
- **interview.md** - Interview preparation notes
- **javascript_string_cheat_sheet.md** - JavaScript string methods cheat sheet
- **string_cheat_sheet.md** - String operations quick reference

---

## Naming Conventions Covered

| Convention | Example | Usage |
|---|---|---|
| **camelCase** | `userName`, `getData()` | Variables, functions, methods |
| **PascalCase** | `UserAccount`, `OrderSummary` | Classes, constructors, components |
| **snake_case** | `user_name`, `total_price` | Database fields, JSON keys, config |
| **SCREAMING_SNAKE_CASE** | `MAX_USERS`, `API_KEY` | Constants, environment variables |
| **kebab-case** | `user-profile`, `nav-header` | HTML/CSS, file names (not JS identifiers) |
| **Train-Case** | `Content-Type`, `X-Api-Key` | HTTP headers |
| **dot.notation** | `database.host`, `app.version` | Config paths, package names |

---

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/Kiran2b9/PlaywrightBatch2x.git
   ```

2. Navigate to the folder:
   ```bash
   cd PlaywrightBatch2x
   ```

3. Run any JavaScript file using Node.js:
   ```bash
   node chapter_01_Basics/01_Basics.js
   ```

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

---

## Author

- **GitHub:** [@Kiran2b9](https://github.com/Kiran2b9)
- **Email:** kiran2b9@gmail.com

---

## License

This project is for educational purposes.
