// let myName = "Subham Biswas  ";
// let myChannel = "chai "

// console.log(myName.trueLength);


let myHero = ["thor", "spiderman" ]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.subham = function (){
    console.log(`subham is present in all objects`);
    
}

// heroPower.hitesh()
// myHero.subham()


Array.prototype.subhamInArray = function(){
    console.log(`Subham says hello to everyone who come to this page`);
    
}
myHero.subhamInArray();
// heroPower.subhamInArray();

const User = {
    name:"subham",
    phone:9449847985
}

const teacher = {
    makeVideos:"true",
}

const teachingSupport = {
    isAvailable : false,
}

const TAsupport = {
    makeAssignment: 'Js assignment',
    fulltime : true ,
    __proto__:teachingSupport
}

teacher.__proto__ = User //this is the prototypal inheritance (a litle bit outdated)


//modern syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chaiAurCode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);   
}

anotherUsername.trueLength()
"subham is good  ".trueLength()