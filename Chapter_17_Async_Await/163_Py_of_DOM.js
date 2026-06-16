function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened!");
        
    });
}
function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page loaded");
    });
}
function enterCredentials(){
    return new Promise(function(resolve){
        resolve("credentials entered");
    })
}
function clickLogin(){
    return new Promise (function (resolve){
        resolve("Logged in successfully");
    })
}


async function runTheE2E(){
    let msg1 = await openBrowser();
    console.log("step1 :",msg1);
    let msg2 = await goToLogin();
    console.log("step2 :",msg2);
    let msg3 = await enterCredentials();
    console.log("step3 :",msg3);
    let msg4 = await clickLogin();
    console.log("step4 :",msg4);
}
runTheE2E();