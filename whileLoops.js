let login=false
let username=""
let password=""
while(login===false){
    username=window.prompt("Enter your username");
    password=window.prompt("Enter the password");
    if(username==="myusername" && password==="mypassword")
        login =true;
    else
        window.alert("Invalid username or password");

}
console.log("You have been loginned");

// Math.random()*(max-min+1)