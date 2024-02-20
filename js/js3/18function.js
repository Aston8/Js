function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2))//only one value can be calculated refer next to calculate many items in cart




function calculateCartPriceone(...num1){//this is called rest operator
    return num1
}
console.log(calculateCartPriceone(200, 400, 500, 2000))//this will be stored in array


function calculateCartPricetwo(val1,val2,...num1){//in this first two value will be stored in val1 and val 2 and rest array
    return num1
}
console.log(calculateCartPricetwo(200, 400, 500, 2000))





const user = {
    username: "aston",
    price: 199
}//passing object in function

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)//calling function and object is user


handleObject({//calling funftion and creating object//instead of creation objrct and then calling we can use this method
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){//array in function
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//getting second value from my new array
console.log(returnSecondValue([200, 400, 500, 1000]));//getting second value in this array