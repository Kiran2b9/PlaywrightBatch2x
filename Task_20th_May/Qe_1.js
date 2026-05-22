//HTTP status code

//let status = 200;
let status = 404;
if(status >= 200 && status <= 299){
    console.log("Sucess");
}else if(status >= 300 && status <= 399){
    console.log("Redirection");
}else if(status >=400 && status <=499){
    console.log("Client Error");
}else if(status >=500 && status <=599){
    console.log("Server Error");
}else{
    console.log("Invalid");
}