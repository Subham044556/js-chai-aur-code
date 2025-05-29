//singleton
// Object.create
//object literals

const mySym = Symbol("key1")

const JSUser = {
    name:"Subham",
    "Full Name":"Subham Biswas",
    [mySym]:"myKey1",//use this syntax for defining a symbol
    age:14,
    location:"Jaipur",
    email:"subham88922gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],

} 

console.log(JSUser.email) // mostly use this only
console.log(JSUser["email"]) // in some cases this is used
// console.log(JSUser."Full Name") --> this gives error
//only way to access Full Name is
console.log(JSUser["Full Name"])
console.log(JSUser[mySym])

JSUser.email = "hardCover.email.com"
JSUser.email  = "chatGpt@microsoft.com"
console.log(JSUser["email"])

// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello Js User")
}
JSUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`)
}
console.log(JSUser.greetingTwo())


