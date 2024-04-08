//  let myName = "Aton     "
//  let mychannel = "chai     "

//  console.log(myName.trueLength);//this gives undefined

//finding length using true length excluding blancplaces


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aston = function(){
    console.log(`aston is present in all objects`);
}

heroPower.aston()
myHeros.aston()



Array.prototype.heyaston = function(){
    console.log(`aston says hello`);
}

 myHeros.heyaston()
 //heroPower.heyaston() we cant acess object in arrays(concept all other are passing through objects )





 // inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//acessing other object suntax __proto__
}

Teacher.__proto__ = User//teacher can acess user properties




// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//same as previous we can acess teacher properties

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);//this will give what is string
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()