//immediately innvoked function expressions (IIFE)
// why required?
// 1. becuse sometimes we need that our browser starts immediately 
//2. because as global scope may pollute the function


(function chai(){  // this is a named iife
    console.log(`DB CONNECTED`)
})(); //IMPORTANT NOTE : always remeber to use semicolon after you make an iife as it doesnt know when to stop  

( (name) => { // not a named iife
    console.log(`DB CONNECTED to ${name}`)
})("babyyyyyy");

