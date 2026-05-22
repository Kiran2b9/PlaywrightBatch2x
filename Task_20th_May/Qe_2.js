/*Question 2 — Test Case Pass/Fail Verdict

Problem: Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials */



let expected = "Login Successful";
let actual   = "Login Successful";

if(expected === "Login Successful" && actual === "Login Successful"){
    console.log(" ✅  Test Passed ");
}else{
    console.log(" ❌  Test Failed : Got: Invalid Credentials ");

}