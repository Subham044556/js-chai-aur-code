const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10 )


//chaining 

const numbers = myNums
                .map( (num) => num*10 )//jo bhi result h wo 2nd chain me pass hoga
                .map((num) => num + 1) // 2nd chain ka third me
                .filter((num) => num  >= 40)

console.log(numbers);