// how to declare a string
const gameName = new String('ETERNAL RISE')
const name = " Subham "


const repoCount = 50
//puraana tareeka niche he to concatenate
// console.log(name + repoCount + " Value");


//naya tarika  --> use backticks  (it is called string interpolation)
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

//some methods to use 
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log (gameName.charAt(0))
console.log (gameName.indexOf('T'))

const newString = gameName.substring(0,4);
console.log(newString)


const anotherString = gameName.slice(-15,3)//slivce me hi negative value de sakte he 
console.log(anotherString);

const newStringOne = "   subhaam  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="hhtps://subham.com/subham%30biswas"
console.log(url.replace('%30','_'))

console.log(url.includes('subham'))  // to check substrings


console.log(gameName.split(' '));// to split based on strings



// there are more functions that are useful 
// take time and when u come to revise please take a peek on them

