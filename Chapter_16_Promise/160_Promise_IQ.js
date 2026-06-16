
/*let p = new Promise(function(resolve, reject){
    resolve(42);
});
p.then(function(value){
    console.log("Answer : ",value);
})*/

/*let p = new Promise(function(resolve,reject){
    reject("Something broke");
});
p.catch(function(err){
    console.log("caught : ",err);
})*/



/*let p = Promise.resolve(5);
p.then(function(val){
    return val * 10;
}).then (function(val){
    console.log("Result : ",val);
});*/



/*Promise.resolve(1)
.then(function(val){
    console.log(val);
    return val + 1;
})
.then(function(val){
    console.log(val);
    return val + 1;
})
.then (function(val){
    console.log(val);
});*/



/*Promise.resolve("start")
.then(function(val){
    console.log(val);
    throw new Error("Broke at step2");
})
.then (function (){
    console.log("This will not run");
})
.catch(function(err){
    console.log("caught :",err.message);
});*/



/*Promise.reject("Test failed")
.then(function(data){
    console.log("data : ",data);
})
.catch(function(err){
    console.log("Error : ",err);
})
.finally(function (){
    console.log("cleanup done");
});*/



/*let t1 = Promise.resolve("Login : Pass");
let t2 = Promise.resolve("search : PASS");
let t3 = Promise.resolve("Logout : PASS");

Promise.all([t1,t2,t3]).then (function(result){
    console.log(result);
});*/



/*let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1,t2,t3])
.then(function(r){console.log("All : ",r)})
.catch(function(err){console.log("Stopped : ",err);});*/


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")

]).then (function(result){
    result.forEach(function(r){
        console.log(r);
    })
})





































































