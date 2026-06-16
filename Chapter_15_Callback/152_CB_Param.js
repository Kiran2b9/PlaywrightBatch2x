
/*function greetTester(name, callback){
    console.log("Welcome " + name);
    callback();
}
greetTester("Dev", function() {
    console.log("Let's start testing.");
})*/

function runTest(testname, callback){
    let status = "pass";
    callback(testname, status);
}
runTest("Login Test", function(name, result){
    console.log(name, "->", result);
})