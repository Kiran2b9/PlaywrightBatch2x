
function print(){
    console.log("Nomal Function");
}

function placeOrder(item, callback){
    console.log("Hi , Your order is placed .");
    callback();
}

//FIRST WAY
placeOrder("Burger", function(){
    console.log("Hi, How are you ?")
});

// SECOND WAY
placeOrder("pizza",print);

