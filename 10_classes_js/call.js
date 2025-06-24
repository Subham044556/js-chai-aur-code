function setUsername(username){
    this.username = username;// call stack se hat jaane se pr iska context khtm ho jaata he isliye ise pehle se hi context dekar bheja gaya he
}

function setProfile(username, email, password){
    
    //setUsername(username);//ye abhi call nahi hua he 
    setUsername.call(this, username);

    this.password = password;
    this.email = email;
}

const chai = new setProfile("chai", "chaiFb.com", 12345);
console.log(chai);

