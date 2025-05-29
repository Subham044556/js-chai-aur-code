

function loginUserMessage(username = "sam"){ //this gave a default value
    if(username === undefined){ // if(!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())