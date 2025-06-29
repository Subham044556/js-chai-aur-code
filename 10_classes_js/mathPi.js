// const descripter =  Object.getOwnPropertyDescriptor(Math,"PI"); // ye object ke baare me jo hidden property he usko dikhata he ya access karne deta he
// console.log(Math.PI);

// console.log(descripter);

const chai = {
    name:"ChaiLatte",
    price:"340",
    isAvailable:true,

    orderChai: function(){
        console.log('chai nahi bani');
        
    }
}
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let[ key ,value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
    console.log(`${key} , ${value}`);
    }   
}