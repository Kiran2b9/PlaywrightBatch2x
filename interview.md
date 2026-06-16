# JavaScript / TypeScript Interview Concepts

## Why `const` is Preferred for Object References

### Quick Corrected Syntax

```javascript
const obj1 = { a: 1, b: 2 }; // ✅ Object literal uses curly braces
```

### Core Concept

Use **`const`** for object references to lock the **reference**, not to make the object immutable.

```javascript
const obj1 = { a: 1, b: 2 };

obj1.a = 100;              // ✅ Allowed — mutating the object itself
obj1 = { a: 3, b: 4 };     // ❌ TypeError — reassigning the reference is blocked
```

### Why Use `const`?

1. **Reference Stability**
   When an object is passed around (function arguments, component props, module exports), consumers expect the variable to always point to the same object. Reassigning it to a different object silently breaks downstream logic.

2. **Clear Intent**
   `const` signals: *"This identifier always points to this specific object."* `let` implies reassignment is expected, which is rarely true for object references.

3. **Prevent Accidental Bugs**
   Reassigning an object variable creates confusion about whether the original object is still referenced elsewhere. `const` removes this entire class of bugs.

4. **Mutation Remains Possible**
   If you need to "change" data, you typically mutate properties on the existing object or declare a new variable with a fresh object. You do not reassign the original reference.

### When to Use `let`?

Only if the variable genuinely must point to a different object later:

```javascript
let currentUser = { name: 'Alice' };
currentUser = { name: 'Bob' }; // allowed
```

Even then, many teams prefer creating a new `const` instead:

```javascript
const alice = { name: 'Alice' };
const bob   = { name: 'Bob' };
```

### Bottom Line

- **`const`**: Locks the reference. Preferred for objects.
- **`let`**: Allows reassignment. Use only when the variable must hold a new object later.
- **True immutability** requires `Object.freeze()` or immutable patterns; `const` alone does not freeze property changes.
