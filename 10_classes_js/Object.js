function multiplyByfive(num){
    return num*5
}

multiplyByfive.power = 2

console.log(multiplyByfive(5));
console.log(multiplyByfive.power);
console.log(multiplyByfive.prototype);

function createUser(username , score){
    this.username = username    
    this.score = score
}
createUser.prototype.increment = function(){
  this.score++;
  
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea =  createUser("tea", 250);

chai.printMe()