// reduce method 

const myNums = [ 1, 2, 3,4,5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval ${currval}`);
//     return acc + currval;
    
// },3)

const myTotal = myNums.reduce((acc, currval) => acc +  currval ,0 )



const shoppingCard = [
    {
        itemName : "js Course",
        price: 299,
    },
    {
        itemName : "cpp course",
        price: 599,
    },
    {
        itemName : "mobile dev course",
        price: 2599,
    },
    {
        itemName : " data course",
        price: 15299,
    },
    
]

// given to add the prices of all the courses 
// easy to use reduce method
const priceToPay =  shoppingCard.reduce((acc , item) => acc + item.price ,0)

console.log(priceToPay);

