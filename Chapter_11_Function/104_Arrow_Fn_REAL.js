
// This is perfect normat function

function validateStatusCode(status){
    if(status >=200 && status <=300){
        console.log("Request is fine");
    }
}
validateStatusCode(205);

//This is FUNCTION as Expression

const validateStatusCode_Exp = function(status){
    if(status >=200 && status <=300){
        console.log("Request is fine");
    }
}
validateStatusCode_Exp(201);

//Arrow Function
const validateStatusCode_Arrow = (status) => {
    if(status >=200 && status <= 300){
        console.log("Request is fine");
    }
}
validateStatusCode_Exp(201);




