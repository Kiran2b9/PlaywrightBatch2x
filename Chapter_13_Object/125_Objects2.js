
let a = { status : "pass"};
//console.log(a.status);
//console.log(a["status"]);
//let b = a;
//console.log(b.status);

let a1 = {status : "pass"};
let b = a1;
b.status = "fail";
console.log(a1.status);
console.log(b.status);

