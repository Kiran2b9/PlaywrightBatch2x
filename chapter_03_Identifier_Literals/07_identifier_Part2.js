// ============================================
// 07_Identifier_Part2.js
// JavaScript Identifier Naming Conventions (Cases)
// ============================================

// --------------------------------------------
// 1. camelCase
//    First word lowercase, each subsequent word capitalized
//    Used for: variables, functions, methods
// --------------------------------------------

let userName = "Kiran";
let emailAddress = "kiran@example.com";
let totalPrice = 199.99;
let isActiveUser = true;
let hasPermission = false;

function getUserById(id) {
    return { id: id, name: "User" };
}

function calculateTotalAmount(price, quantity) {
    return price * quantity;
}

function validateEmailAddress(email) {
    return email.includes("@");
}

console.log("=== camelCase ===");
console.log(userName, emailAddress, totalPrice);
console.log(getUserById(1));
console.log(calculateTotalAmount(10, 5));


// --------------------------------------------
// 2. PascalCase (UpperCamelCase)
//    Every word starts with uppercase letter
//    Used for: classes, constructors, React components, enum-like objects
// --------------------------------------------

class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class BankTransaction {
    constructor(amount) {
        this.amount = amount;
    }
}

class ProductDetails {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

// React-style functional components
function UserProfileCard() {
    return "User Profile Component";
}

function OrderSummaryModal() {
    return "Order Summary Component";
}

// Enum-like object
const UserRoles = {
    Admin: "admin",
    Editor: "editor",
    Viewer: "viewer"
};

console.log("\n=== PascalCase ===");
console.log(new UserAccount("Kiran", "kiran@example.com"));
console.log(UserRoles.Admin, UserRoles.Editor);


// --------------------------------------------
// 3. snake_case
//    All lowercase, words separated by underscores
//    Used for: database fields, JSON keys, configuration, some APIs
// --------------------------------------------

let user_name = "Kiran";
let email_address = "kiran@example.com";
let total_price = 199.99;
let is_active_user = true;
let created_at = "2024-01-01";

let api_base_url = "https://api.example.com";
let db_connection_string = "postgres://localhost:5432/mydb";
let max_retry_attempts = 3;

function get_user_by_id(id) {
    return { user_id: id, user_name: "User" };
}

function calculate_total_amount(price, quantity) {
    return price * quantity;
}

console.log("\n=== snake_case ===");
console.log(user_name, email_address, total_price);
console.log(api_base_url, db_connection_string);


// --------------------------------------------
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
//    All uppercase, words separated by underscores
//    Used for: constants, environment variables, configuration constants
// --------------------------------------------

const MAX_USERS = 100;
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT_MS = 5000;
const API_BASE_URL = "https://api.example.com";
const API_KEY = "sk-abc123xyz789";
const DB_HOST = "localhost";
const DB_PORT = 5432;
const PI_VALUE = 3.14159;
const E_VALUE = 2.71828;
const DEBUG_MODE = true;
const VERSION_NUMBER = "1.0.0";

console.log("\n=== SCREAMING_SNAKE_CASE ===");
console.log(MAX_USERS, MAX_RETRY_COUNT, DEFAULT_TIMEOUT_MS);
console.log(API_KEY, DB_HOST, DB_PORT);


// --------------------------------------------
// 5. kebab-case (dash-case, hyphen-case)
//    All lowercase, words separated by hyphens
//    NOT VALID for JavaScript identifiers (variables, functions, classes)
//    Used for: HTML attributes, CSS class names, file names, URLs, IDs
// --------------------------------------------

// INVALID in JavaScript:
// let user-name = "Kiran";        // SyntaxError
// let total-price = 100;          // SyntaxError
// function get-user() {}          // SyntaxError

// VALID as strings or object keys with bracket notation:
let cssClasses = {
    "user-profile": "profile-card active",
    "nav-header": "navbar fixed-top",
    "main-content": "container-fluid",
    "footer-section": "bg-dark text-white",
    "btn-primary": "button primary"
};

let htmlAttributes = {
    "data-user-id": 101,
    "data-role": "admin",
    "aria-label": "Close dialog",
    "aria-hidden": "true"
};

let fileNames = {
    "user-profile": "user-profile.html",
    "order-summary": "order-summary.js",
    "api-config": "api-config.json"
};

console.log("\n=== kebab-case (strings/keys only) ===");
console.log(cssClasses["user-profile"]);
console.log(htmlAttributes["data-user-id"]);
console.log(fileNames["order-summary"]);


// --------------------------------------------
// 6. Train-Case (HTTP-Header-Case)
//    Like kebab-case but each word capitalized
//    Used for: HTTP headers, some API naming conventions
// --------------------------------------------

let httpHeaders = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate",
    "X-Custom-Header": "custom-value",
    "X-Request-ID": "req-12345",
    "X-Api-Key": "abc123",
    "Authorization": "Bearer token123"
};

let apiHeaders = {
    "Content-Length": 1024,
    "Cache-Control": "no-cache",
    "X-Forwarded-For": "192.168.1.1"
};

console.log("\n=== Train-Case (HTTP headers) ===");
console.log(httpHeaders["Content-Type"]);
console.log(httpHeaders["X-Api-Key"]);
console.log(apiHeaders["Cache-Control"]);


// --------------------------------------------
// 7. dot.notation (dot case)
//    Words separated by dots/periods
//    Used for: object property paths, configuration keys, package names
// --------------------------------------------

let appConfig = {
    "app.name": "MyApplication",
    "app.version": "2.0.0",
    "app.debug": true,
    "database.host": "localhost",
    "database.port": 5432,
    "database.name": "mydb",
    "server.timeout": 30000,
    "server.maxConnections": 100
};

let nestedPaths = {
    "user.profile.name": "Kiran",
    "user.profile.email": "kiran@example.com",
    "user.settings.theme": "dark",
    "user.settings.language": "en"
};

// Common in npm package names
// examples: lodash.debounce, react-dom, @babel/core, eslint-plugin-react

console.log("\n=== dot.notation ===");
console.log(appConfig["app.name"]);
console.log(appConfig["database.host"]);
console.log(nestedPaths["user.profile.name"]);


// --------------------------------------------
// 8. flatcase
//    All lowercase, no separators between words
//    Rarely used, but valid in JavaScript
// --------------------------------------------

let username = "kiran";
let emailaddress = "kiran@example.com";    // Hard to read!
let totalprice = 199.99;                    // Not recommended
let isactiveuser = true;                    // Confusing

// Better to use camelCase or snake_case instead
console.log("\n=== flatcase (not recommended) ===");
console.log(username);
// Avoid: emailaddress, totalprice, isactiveuser


// --------------------------------------------
// 9. Title Case (Start Case)
//    Every word starts with uppercase, space separated
//    NOT valid for JS identifiers, used for display/UI text
// --------------------------------------------

let pageTitles = {
    "User Profile": "Profile Page",
    "Order Summary": "Summary Page",
    "Payment Details": "Payment Page",
    "Shipping Address": "Shipping Page"
};

let buttonLabels = {
    "Submit Order": "Submit",
    "Cancel Payment": "Cancel",
    "Add To Cart": "Add"
};

console.log("\n=== Title Case (display text only) ===");
console.log(pageTitles["User Profile"]);
console.log(buttonLabels["Submit Order"]);


// --------------------------------------------
// Summary: When to use which case?
// --------------------------------------------
console.log("\n========================================");
console.log("SUMMARY: Naming Convention Usage Guide");
console.log("========================================");
console.log("camelCase           -> variables, functions, methods");
console.log("                    -> userName, getData(), calculateTotal()");
console.log("");
console.log("PascalCase          -> classes, constructors, components, enums");
console.log("                    -> UserAccount, ReactComponent, UserRoles");
console.log("");
console.log("snake_case          -> database fields, JSON keys, config, APIs");
console.log("                    -> user_name, created_at, api_base_url");
console.log("");
console.log("SCREAMING_SNAKE     -> constants, environment variables");
console.log("                    -> MAX_USERS, API_KEY, DB_HOST");
console.log("");
console.log("kebab-case          -> HTML/CSS, file names, URLs (NOT JS identifiers)");
console.log("                    -> user-profile, main-content, order-summary.js");
console.log("");
console.log("Train-Case          -> HTTP headers");
console.log("                    -> Content-Type, X-Api-Key, Authorization");
console.log("");
console.log("dot.notation        -> config paths, package names");
console.log("                    -> database.host, app.version, lodash.debounce");
console.log("");
console.log("flatcase            -> valid but NOT recommended");
console.log("                    -> username (OK), emailaddress (AVOID)");
console.log("");
console.log("Title Case          -> UI text, display only (NOT JS identifiers)");
console.log("                    -> User Profile, Order Summary");
console.log("========================================");

