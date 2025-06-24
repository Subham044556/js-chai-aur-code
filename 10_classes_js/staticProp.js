class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static creatId(){  // static se koi bhi isse access nahi kar sakta
        return `124`
    }
    
}

const hitesh = new User("Soham")
console.log(hitesh.creatId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }


}


const iPhone = Teacher("IPhone", "I@phone.com")
iPhone.logMe()
console.log(iPhone);



