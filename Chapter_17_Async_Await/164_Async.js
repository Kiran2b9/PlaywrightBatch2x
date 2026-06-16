
//Basic Async and Await

async function getTestResult(){
    return "pass";
}
getTestResult.then(function(res){
    console.log(res);
});
