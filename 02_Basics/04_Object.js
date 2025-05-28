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