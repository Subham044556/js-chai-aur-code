const User = {
    _email :"chai.In.gmail.com",
    _password:"sjdcd",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}


const tea = Object.create(User)
console.log(tea.email);




// this syntax of dwfining the getter and setter of the properties is a bit old
//use the function or class method