//primitive
//7 types :string ,number boolean,null,undefined,symbol,bigint
//this code will give error because i have used cinst manytimes
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // value empty
let userEmail; // value stored undefined

const Id = Symbol('123');
const anotherId = Symbol('123');
console.log(Id === anotherId); // these two will not be the same because of Symbol

const bignumber = 23456789456n; // n means bigint

// reference (non-primitive)
// array, objects, functions

const heros = ["hulk", "batman", "spiderman"]; // this is a non-primitive array
let myobj = {
    name: "aston",
    age: 24,
}

// declaring function
const myFunction = function () {
    console.log("hello world");
}

console.log(typeof outsideTemp);
//we have putt null in outside temp so it will give object
// typeof myFunction it will give function ,symbol gives symbol

//imp read type of operator in js ecmascript 11.4.3 or screenshot