class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCOurse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("chai@teacher.com", "chai@teacher.com", "124")

chai.addCOurse();

const masalaChai = new User("masalaChoi")

masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof User);



