/*let testRun = new Promise(function(resolve,reject){
    reject("Assertion Failed");
});
testRun.then (function(data){
    console.log(data);
}).catch (function(error){
    console.log(error);
}).finally(function(){
    console.log("i will be execute anyHow!");
})*/


let testRun = new Promise(function(resolve,reject){
    let apiCall = true;
    if(apiCall){
        resolve({ "status": "done"});
    }else{
        reject("Assertion Failed");
    }
    
});
testRun.then (function(data){
    console.log(data);
}).catch (function(error){
    console.log(error);
}).finally(function(){
    console.log("i will be execute anyHow!");
})









