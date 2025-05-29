const user= {
    username:"' subham",
    price:99,

    welcomeMessage : function(){
        console.log(`${this.username}  , welcome to the website`);
        console.log(this);
    }

    



}

//  user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "chai wala function ";
//     //console.log(this.username) --> ye yahan par this aise use nahi hotaa (function me nahi )
// }

// const chai = function(){
//      let username = "chai wala function ";
//      console.log(this.username);
// }
const chai = () => {
     let username = "chai wala function ";
     console.log(this);
}



// chai()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2;// this is explicit return 
// }

//const addTwo = (num1 , num2 ) => num1 + num2
// the above one is implicit type function
 
//  const addTwos = (num1 , num2 ) => (num1 + num2) // this is how we return any object in a function implicitly 
const addTwos = (num1 , num2 ) =>({username:"don"})
console.log(addTwos(3,4))








