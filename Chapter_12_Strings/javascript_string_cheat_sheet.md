# JavaScript String Methods Cheat Sheet

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `charAt(index)` | `"hello".charAt(1)` | `e` | Returns character at specified index |
| `charCodeAt(index)` | `"hello".charCodeAt(1)` | `101` | Returns UTF-16 code unit at index |
| `codePointAt(index)` | `"😀".codePointAt(0)` | `128512` | Returns Unicode code point value |
| `concat(...strings)` | `"hello".concat(" ", "world")` | `hello world` | Joins two or more strings |
| `endsWith(search)` | `"hello.txt".endsWith(".txt")` | `true` | Checks if string ends with search string |
| `includes(search)` | `"hello".includes("ell")` | `true` | Checks if string contains substring |
| `indexOf(search)` | `"hello".indexOf("l")` | `2` | Returns first index of substring (-1 if not found) |
| `lastIndexOf(search)` | `"hello".lastIndexOf("l")` | `3` | Returns last index of substring (-1 if not found) |
| `localeCompare(str)` | `"a".localeCompare("b")` | `-1` | Compares two strings in locale order |
| `match(regex)` | `"abc123".match(/\d+/)` | `["123"]` | Matches string against regex |
| `matchAll(regex)` | `"a1b2".matchAll(/\d/g)` | Iterator | Returns iterator of all regex matches |
| `normalize(form)` | `"é".normalize("NFC")` | varies | Returns Unicode normalized form |
| `padEnd(length, pad)` | `"hi".padEnd(5, "*")` | `hi***` | Pads end of string to target length |
| `padStart(length, pad)` | `"42".padStart(5, "0")` | `00042` | Pads start of string to target length |
| `repeat(count)` | `"ha".repeat(3)` | `hahaha` | Repeats string count times |
| `replace(search, new)` | `"hello".replace("l", "x")` | `hexlo` | Replaces first match with new substring |
| `replaceAll(search, new)` | `"hello".replaceAll("l", "x")` | `hexxo` | Replaces all matches with new substring |
| `search(regex)` | `"abc123".search(/\d/)` | `3` | Returns index of first regex match (-1 if not found) |
| `slice(start, end)` | `"hello".slice(1, 4)` | `ell` | Extracts section of string |
| `split(separator)` | `"a,b,c".split(",")` | `["a","b","c"]` | Splits string into array by separator |
| `startsWith(search)` | `"hello".startsWith("hel")` | `true` | Checks if string starts with search string |
| `substring(start, end)` | `"hello".substring(1, 4)` | `ell` | Returns part of string between indices |
| `toLocaleLowerCase()` | `"HELLO".toLocaleLowerCase()` | `hello` | Lowercase using locale rules |
| `toLocaleUpperCase()` | `"hello".toLocaleUpperCase()` | `HELLO` | Uppercase using locale rules |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `hello` | Converts to lowercase |
| `toString()` | `(123).toString()` | `"123"` | Returns string representation |
| `toUpperCase()` | `"hello".toUpperCase()` | `HELLO` | Converts to uppercase |
| `trim()` | `"  hello  ".trim()` | `hello` | Removes whitespace from both ends |
| `trimEnd()` | `"  hello  ".trimEnd()` | `  hello` | Removes whitespace from end |
| `trimStart()` | `"  hello  ".trimStart()` | `hello  ` | Removes whitespace from start |
| `valueOf()` | `new String("hi").valueOf()` | `hi` | Returns primitive string value |
| `at(index)` | `"hello".at(-1)` | `o` | Returns character at index (supports negatives) |

---

## Quick Reference by Category

### Case Conversion
- `toUpperCase()`, `toLowerCase()`, `toLocaleUpperCase()`, `toLocaleLowerCase()`

### Searching & Checking
- `indexOf()`, `lastIndexOf()`, `includes()`, `startsWith()`, `endsWith()`, `search()`, `match()`, `matchAll()`, `charAt()`, `at()`, `charCodeAt()`, `codePointAt()`

### Modifying & Transforming
- `replace()`, `replaceAll()`, `split()`, `concat()`, `repeat()`, `normalize()`

### Extracting & Slicing
- `slice()`, `substring()`, `substr()` *(deprecated)*

### Alignment & Padding
- `padStart()`, `padEnd()`

### Trimming
- `trim()`, `trimStart()`, `trimEnd()`

### Locale & Comparison
- `localeCompare()`

### Utility
- `toString()`, `valueOf()`

---

## String Properties

| Property | Example | Result | Description |
|----------|---------|--------|-------------|
| `length` | `"hello".length` | `5` | Returns number of characters in string |

---

## Template Literals (Backticks)

| Syntax | Example | Result | Description |
|--------|---------|--------|-------------|
| `${expression}` | `` `Hello ${name}` `` | varies | Interpolates variables/expressions |
| `String.raw` | ``String.raw`C:\Users`` | `C:\Users` | Returns raw string without escape processing |

---

## Static String Methods (called on `String` directly)

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `String.fromCharCode()` | `String.fromCharCode(65)` | `A` | Creates string from UTF-16 code units |
| `String.fromCodePoint()` | `String.fromCodePoint(128512)` | `😀` | Creates string from code points |
| `String.raw` | ``String.raw`\n`` | `\n` | Returns raw template string |

---

*Note: `at()`, `replaceAll()`, `matchAll()` require modern browsers/Node.js versions.*
* `substr()` is deprecated; prefer `slice()` or `substring()`.*
