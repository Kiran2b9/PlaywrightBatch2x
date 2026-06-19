
function openBrowser(callback){
    console.log("opening the chrome browser");
    setTimeout(function(){
        callback();
    },1000);
}
function gotologinPage(callback){
    setTimeout(function (){
        console.log("stept 2: login page loaded");
        callback();
    },500);
}
function enterCredential(callback){
    setTimeout(function (){
        console.log("Step 3:Enter credential");
        callback();
    },2000);
}
function clickloginPage(callback){
    setTimeout(function (){
        console.log("setp 4 : click to login page");
        callback();
    },1000);
}
openBrowser(function (){
    gotologinPage(function(){
        enterCredential(function (){
            clickloginPage(function (){

            })
        })
    })
})