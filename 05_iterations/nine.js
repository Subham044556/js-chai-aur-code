
// you can set a function to run after a interval
//it is mostly used in time related things 
// below is the syntax

const clock = document.getElementById('give_id_here')

setInterval(function(){
 let date = new Date();
 clock.innerHTML = date.toLocaleTimeString();
}, 1000) //the second parameter is after how many miliseconds it will run