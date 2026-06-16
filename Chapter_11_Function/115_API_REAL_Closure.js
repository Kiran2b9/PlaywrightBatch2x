
function makeRetryTracker(max){
    let attempt = 0;
    function tryAgain(testName){
        attempt ++;
        if(attempt > max){
            return `${testName} exceeded max retries (${max})`;
        }
        return `attempts ${attempt}/${max} for ${testName}`
    }
    return tryAgain;
}
let tryAgain = makeRetryTracker(3);
console.log(tryAgain("login"));
console.log(tryAgain("login"));
console.log(tryAgain("login"));
console.log(tryAgain("login"));
console.log(tryAgain("login"));