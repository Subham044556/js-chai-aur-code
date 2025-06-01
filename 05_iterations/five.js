const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
// console.log(val)
// } )


// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// we get more parameters like index and the whole array it is currently acessing
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageSym: "js",
    },
    {
        languageName: "java",
        languageSym: "java",
    },
    {
        languageName: "cpp",
        languageSym: "cpp",
    }
]


myCoding.forEach((item) =>{
    console.log(item.languageName);
} )
