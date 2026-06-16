# Python String Methods Cheat Sheet

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `capitalize()` | `"hello world".capitalize()` | `Hello world` | Capitalizes first character |
| `casefold()` | `"HELLO".casefold()` | `hello` | Aggressive lowercase for comparison |
| `center(width)` | `"hi".center(6, '-')` | `--hi--` | Centers string in given width |
| `count(sub)` | `"banana".count("a")` | `3` | Counts occurrences of substring |
| `encode()` | `"hello".encode()` | `b'hello'` | Encodes to bytes (default UTF-8) |
| `endswith(suffix)` | `"hello.txt".endswith(".txt")` | `True` | Checks if string ends with suffix |
| `expandtabs()` | `"a\tb".expandtabs(4)` | `a   b` | Replaces tabs with spaces |
| `find(sub)` | `"hello".find("l")` | `2` | Returns lowest index of substring (-1 if not found) |
| `format(*args)` | `"{} + {}".format(1, 2)` | `1 + 2` | Formats string with placeholders |
| `format_map(mapping)` | `"{x}".format_map({"x": 5})` | `5` | Formats using dictionary mapping |
| `index(sub)` | `"hello".index("l")` | `2` | Returns lowest index (raises ValueError if not found) |
| `isalnum()` | `"abc123".isalnum()` | `True` | True if all chars are alphanumeric |
| `isalpha()` | `"abc".isalpha()` | `True` | True if all chars are alphabetic |
| `isascii()` | `"hello".isascii()` | `True` | True if all chars are ASCII |
| `isdecimal()` | `"123".isdecimal()` | `True` | True if all chars are decimal characters |
| `isdigit()` | `"123".isdigit()` | `True` | True if all chars are digits |
| `isidentifier()` | `"var1".isidentifier()` | `True` | True if valid Python identifier |
| `islower()` | `"hello".islower()` | `True` | True if all cased chars are lowercase |
| `isnumeric()` | `"½".isnumeric()` | `True` | True if all chars are numeric |
| `isprintable()` | `"hello".isprintable()` | `True` | True if all chars are printable |
| `isspace()` | `"  ".isspace()` | `True` | True if all chars are whitespace |
| `istitle()` | `"Hello World".istitle()` | `True` | True if titlecase (each word capitalized) |
| `isupper()` | `"HELLO".isupper()` | `True` | True if all cased chars are uppercase |
| `join(iterable)` | `"-".join(["a", "b", "c"])` | `a-b-c` | Joins iterable with string as separator |
| `ljust(width)` | `"hi".ljust(5, '*')` | `hi***` | Left-justifies in given width |
| `lower()` | `"HELLO".lower()` | `hello` | Converts to lowercase |
| `lstrip(chars)` | `"  hello".lstrip()` | `hello` | Removes leading whitespace (or chars) |
| `maketrans(x, y)` | `str.maketrans("abc", "123")` | `{97: 49, ...}` | Creates translation table |
| `partition(sep)` | `"a-b-c".partition("-")` | `('a', '-', 'b-c')` | Splits into (before, sep, after) |
| `removeprefix(prefix)` | `"HelloWorld".removeprefix("Hello")` | `World` | Removes prefix (Python 3.9+) |
| `removesuffix(suffix)` | `"HelloWorld".removesuffix("World")` | `Hello` | Removes suffix (Python 3.9+) |
| `replace(old, new)` | `"hello".replace("l", "x")` | `hexxo` | Replaces occurrences of substring |
| `rfind(sub)` | `"hello".rfind("l")` | `3` | Returns highest index of substring (-1 if not found) |
| `rindex(sub)` | `"hello".rindex("l")` | `3` | Returns highest index (raises ValueError if not found) |
| `rjust(width)` | `"hi".rjust(5, '*')` | `***hi` | Right-justifies in given width |
| `rpartition(sep)` | `"a-b-c".rpartition("-")` | `('a-b', '-', 'c')` | Splits from right into (before, sep, after) |
| `rsplit(sep)` | `"a,b,c".rsplit(",", 1)` | `['a,b', 'c']` | Splits from right by separator |
| `rstrip(chars)` | `"hello  ".rstrip()` | `hello` | Removes trailing whitespace (or chars) |
| `split(sep)` | `"a,b,c".split(",")` | `['a', 'b', 'c']` | Splits by separator |
| `splitlines()` | `"a\nb".splitlines()` | `['a', 'b']` | Splits by line boundaries |
| `startswith(prefix)` | `"hello.txt".startswith("hel")` | `True` | Checks if string starts with prefix |
| `strip(chars)` | `"  hello  ".strip()` | `hello` | Removes leading and trailing whitespace |
| `swapcase()` | `"Hello".swapcase()` | `hELLO` | Swaps uppercase to lowercase and vice versa |
| `title()` | `"hello world".title()` | `Hello World` | Converts to titlecase |
| `translate(table)` | `"hello".translate(table)` | varies | Translates using translation table |
| `upper()` | `"hello".upper()` | `HELLO` | Converts to uppercase |
| `zfill(width)` | `"42".zfill(5)` | `00042` | Pads with zeros on the left |

---

## Quick Reference by Category

### Case Conversion
- `upper()`, `lower()`, `capitalize()`, `title()`, `swapcase()`, `casefold()`

### Searching
- `find()`, `index()`, `rfind()`, `rindex()`, `startswith()`, `endswith()`, `count()`

### Modifying / Transforming
- `replace()`, `strip()`, `lstrip()`, `rstrip()`, `split()`, `rsplit()`, `join()`

### Alignment & Padding
- `center()`, `ljust()`, `rjust()`, `zfill()`, `expandtabs()`

### Validation / Checking
- `isalnum()`, `isalpha()`, `isascii()`, `isdecimal()`, `isdigit()`, `isidentifier()`, `islower()`, `isnumeric()`, `isprintable()`, `isspace()`, `istitle()`, `isupper()`

### Splitting & Partitioning
- `partition()`, `rpartition()`, `split()`, `rsplit()`, `splitlines()`

### Other
- `encode()`, `format()`, `format_map()`, `maketrans()`, `translate()`, `removeprefix()`, `removesuffix()`

---

*Note: `removeprefix()` and `removesuffix()` require Python 3.9+*
