
function cafe(item, callWhenTableisReady){
    console.log("finding .... 1");
    console.log("finding .... 2");
    console.log("finding .... 2");
    console.log(item);
    callWhenTableisReady();
}

function callWhenTableisReady(){
    console.log("calling 9876543210");
}

/*cafe("Burger", callWhenTableisReady);*/

/*cafe("Mos", () =>{
    console.log("calling 8765");
})*/

cafe("Pizza", function (){
    console.log("calling 8765463123");
})