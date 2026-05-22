
let isLoggedIn = true;
let userRole = "editor";

if(isLoggedIn){
    if(userRole === "admin"){
        console.log("admin can do all things");
    }else if(userRole === "editor"){
        console.log("Welcome Editor - edit access granted");
    }else if(userRole === "viewer"){
        console.log("welcome Viewer - Read only access.");
    }else{
        console.log("not idea");
    }
}