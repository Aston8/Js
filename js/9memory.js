//stack(primitive),heap(non primitive)
let myName = "aston"

let anotherName = myName //now when we give console .log wefor another name we will get aston
anotherName = "monteiro"

console.log(myName);
console.log(anotherName);//here for another name we will get monteiro 


let userone ={
    email:"uesrgmail.com",
    upi:"user@ybl"


}

let usertwo =userone

usertwo.email="aston@gmail.com"

console.log(userone.email);
console.log(usertwo.email);//both will give aston only because this is heap
