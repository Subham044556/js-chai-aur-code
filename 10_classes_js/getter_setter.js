class User{
    constructor(email ,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }          
    set email(value){
        this._email=value;
    }

    get password(){
        return `${this._password}subh`//yahan par apan sab ko change kar sakte he 
    }

    set password(value){
        this._password = value;
    }
}


const subham = new User("subham123@gmail.com", "567");
console.log(subham.password);
console.log(subham.email);
