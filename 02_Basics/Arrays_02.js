const marvel_heroes = ["thor","IronMan","Spiderman"
]
const dcHeroes = ["SuperMan","Flash","BAtman"]

// marvel_heroes.push(dcHeroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])


// const allHeros =   marvel_heroes.concat(dcHeroes);
// console.log(allHeros)

//we can use spread operator

const all_new_heroes = [...marvel_heroes, ...dcHeroes]; // ... makes the array spread
// console.log(all_new_heroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const RealAnotherArray = anotherArray.flat(Infinity)

console.log(RealAnotherArray)


console.log(Array.isArray("Subham"))
console.log(Array.from("Subham"))


let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));


