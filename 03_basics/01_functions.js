

function loginUserMessage(username = "sam"){ //this gave a default value
    if(username === undefined){ // if(!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

//


function calculateCartPrice(...num1 ){// ... -> this is called rest operator as well as spread operator , but here it is rest because 
    return num1;
}

function calculateCartPrice02(val1 , val2 ,...num1 ){// ... -> now this will take the rest as a array and return that part only  
    return num1;
}

// console.log(calculateCartPrice02(200,400,600, 700,300));

const user = {
    username: "soham",
    prices: 500,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}


handleObject(user)

handleObject({
    username:"sam",
    prices: 566,
})

const myNewArray = [200,300,400,1000];

function return2ndValue(getArray){
    return getArray[2]
}

console.log(return2ndValue(myNewArray))
console.log(return2ndValue([200,500,600,400]))