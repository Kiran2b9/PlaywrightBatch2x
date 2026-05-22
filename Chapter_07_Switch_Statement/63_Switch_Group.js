let browser = "edge";

switch(browser){
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("chromium Product");
        break;
    case "firefox":
        console.log("Mozilla Project");
        break;
    case "safari":
        console.log("Apple Browser");
        break;
    default:
        console.log("unknown browser");
}