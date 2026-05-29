
let result = ["pass","fail","pass","error","fail"];

/*result.indexOf("fail");

result.indexOf("skip");

console.log(result.indexOf("fail"));

result.lastIndexOf("fail");*/

// Includes - return Boolean

/*result.includes("error");
result.includes("skip");
console.log(result.includes("error"));
console.log(result.includes("skip"));*/


//Find return first matching element

let nums = [10,25,30,45];
/*nums1.find(x => x > 20);
console.log(nums1.find(x => x > 20));*/

// Find Index

nums.findIndex(n => n > 20);
console.log(nums.findIndex(n => n > 20));

nums.findLast(n => n > 20);
console.log(nums.findLast(n => n > 20));

nums.findLastIndex(n => n > 20);
console.log(nums.findLastIndex(n => n > 20));



