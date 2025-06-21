const promiseOne = new Promise(function(resolve, reject){
    //Do sdync tasks
    //DB calls , cryptography, nretwork
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000);

})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000 )
}).then(function(){
    console.log('Async task 2 resolved');
    
})

const promoseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai" , email:"TeriMeriKahani"})
    }, 1000)
})

promoseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Subham", password:"1234"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
    
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
    
}).catch(function(message){
    console.log(message);
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"1234"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})


//dusra tareeka to imply promise
async function consumePromiseFive(){
   try {
    const response =  await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error); 
   }
   
}

consumePromiseFive();

async function getAllUsers() {
    const response = await fetch('any_url.com')
    const data = response.json()
    console.log(data);   
}

fetch('https://api.github.com/users/subham044556')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

