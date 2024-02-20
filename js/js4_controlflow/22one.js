// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
     console.log("equal to 40");
 } else {
     console.log("not equal to 40");
 }
 console.log("Execute");//this is default





// <, >, <=, >=, ==, !=, ===, !==  //comparisions





const score = 200

 if (score > 100) {
     let power = "fly"
     console.log(`User power: ${power}`);
 }

// console.log(`User power: ${power}`); outside scope will not execute







const balance = 1000

 if (balance > 500) console.log("test"); //this will execute in one line we can write another sentence putting , and writing console log
 //but this syntax will never be used



 if (balance < 500) {
     console.log("less than 500");
 } else if (balance < 750) {
     console.log("less than 750");
    
 } else if (balance < 900) {
     console.log("less than 750");
    
 } else {
     console.log("less than 1200");//default

 }





 //real life example

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}