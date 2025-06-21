const user = {
    username:"hitesh",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username is ${this.username}`);
        console.log(this);
        
    }

}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function UserPeople(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}// yahan pe explicitly return kiya gaya he par ye apne aap(implicitly) return hota he

const userOne = new UserPeople("Subham",5 , false);
//1.new keyword actually ek naya instance(copy) generate karta he aur usime hi save karta he naye data ko

//2. constructor function call hota he
//3. arguments and this keyword se inject hota he 
//4. mil jaata he 

const userTwo = new UserPeople("Purba", 4 , true);
console.log(userOne.constructor);

// one more operator is there named : instanceOf --> read it later by google or chatGpt