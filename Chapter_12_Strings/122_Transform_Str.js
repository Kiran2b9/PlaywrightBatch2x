
let msg = "Test : FAIL. Retry : FAIL.";
msg.replace("FAIL","PASS");
console.log(msg.replace("FAIL","PASS"));
console.log(msg.replaceAll("FAIL","PASS"));

console.log(msg.replace(/FAIL/g,"PASS"));

// CONCATINATION

let a = "Hello";
let b = "world";
let c = `${a}  ${b}`;
console.log(c);

let url = "https://app.vwo.can?app=pramod";
console.log(url.replace(/app/g,"qa"));

// SPLIT

let r = "pass, fail, skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);


let parts = ["2024","03","07"];
let date = parts.join("-");
console.log(date);














