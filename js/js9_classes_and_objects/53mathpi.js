const descripter = Object.getOwnPropertyDescriptor(Math, "PI")//getOwnPropertyDescriptor is like seeing what is there (here we see PI)

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,//if it is false then name is not iterable in for (see last code )
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {//checking that value is not function
        
        console.log(`${key} : ${value}`);
    }
}