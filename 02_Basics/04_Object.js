//const tinderUSer = new Object()
const tinderUser= {}
tinderUser.id = "123abc"
tinderUser.name = "Soham"
tinderUser.isLoggedIn = false

//console.log(tinderUser)
const normalUser = {
    fullName : {
        userFullName : {
            firstName: "Priyanshi ",
            lastname: "Biswas",
        }
    }
}

console.log(`My name is ${normalUser.fullName.userFullName.firstName} ${normalUser.fullName.userFullName.lastname} `)


const obj1 =  {1:"a" ,2:"b"}
const obj2 =  {3:"a" ,4:"b"}
const obj3 =  {5:"a" ,6:"b"}

// const obj4 = {obj1, obj2,obj3}
// const obj4 = Object.assign({}, obj1, obj2 ,obj3);

const obj4 = {...obj1,...obj2,...obj3} // use this method effectively

// console.log(obj4)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//to check whether it has the property or not 

//destruturing
const course ={
    coursename :"js in hindi",
    price:"999",
    courseInsructor:"subham",
}

// course.courseInsructor

const {courseInsructor : instructor } = course

console.log(instructor);

// {
//     name:"subham",
//     "course":"mastering everything",
//     "price": "time",
// }