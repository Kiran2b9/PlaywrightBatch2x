
function outer(){
    let message = "Hello";
    console.log("outer called !");

    function inner(){
        console.log(message);
    }
    return inner;
}
let inner = outer();
inner();