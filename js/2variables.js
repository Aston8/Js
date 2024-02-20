const accountId=144553
let accountEmail="astom@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountstate;

//accountId=2 //not allowed const value cannot be changed

accountEmail="abv@has.com"
accountPassword="78547"//cant change in let and const
accountCity="banglored"
console.log(accountId);



/*
prefer not to use var(because when we use same variables its vaule will change which create problem)

because of issue in bklock scope and functional scope


*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])