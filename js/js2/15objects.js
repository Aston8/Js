// singleton
//when we create using constructor "it is singulton"
//when we create using literals "it is not singuton" 

Object.create//singulton

// object literals:(this topic is object literals)

const mySym = Symbol("key1")//declaring symbol(this is ject declaring not giving value)


const JsUser = {
    name: "aston",
    "full name": "aston monteiro",
    [mySym]: "mykey1",//syntax for declaring symbol in objects if we not use square brackets type of comes as string
    age: 18,
    location: "Jaipur",
    email: "aston@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}//this full step is creting object

console.log(JsUser.email)//accesing objects(this method can not be used everywhere) like in this we cant access we full name
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "aston@chatgpt.com"

// Object.freeze(JsUser) //after using this changes does not apply
//JsUser.email = "hitesh@microsoft.com" //not changes because we have used freese
// console.log(JsUser); //to see  output of freeze 

JsUser.greeting = function(){
    console.log("Hello JS user");
}//declaring function
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//${this.name } is used for accessing name in this line
}
console.log(JsUser.greetingTwo());

//comes two output as undefined we will study later