// for of

["", "",""]
[{},{},{}]


// const arr = [1 ,2 ,3, 4, 5]
// for (const num of arr) {
//     console.log(num)
// }

// const greetings = " hwellp worlf"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

// maps 
  const map = new Map()
  map.set('IN', "India")
  map.set('USA', "United States of America")
  map.set('FR', "France")

  console.log(map);

  for (const [key , value ] of map) { // destructuring of array can be done and used pairwise
    console.log(key , ':-' , value);
    
  }


  // maps are iteratable but objects are not
  const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA',
    'game3' : 'PUBG',
  }

//   // this throws an error
//   for (const [key , value ] of myObject) {
//     console.log(key ,':-' , value );
//   }

