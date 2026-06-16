
let order = new Promise(function(resolve,rejected){
    let foodready = true;
    if(foodready){
        resolve("Pizza is delivered");
    }else{
        reject("order cancelled");
    }
})
console.log(order);