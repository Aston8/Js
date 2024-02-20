const name ="aston";
const repoCount = 50;

console.log(name+repoCount+"vallue"); //now a days we dont use this refer below method to write in now adays style


console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //follow this syntax to combine  varibles ind inject varibles inside brackets called as string interpolation


// Creating a string using the String constructd
const gameName = new String('hitesh-hc');

console.log(gameName[0]); // Accessing character at index 0 (gives 'a')
console.log(gameName.__proto__); // Accessing the prototype of the string

console.log(gameName.length); // Getting the length of the string
console.log(gameName.toUpperCase()); // Correcting the method name toUpperCase()
console.log(gameName.charAt(2)); // Correcting the method name charAt()
console.log(gameName.indexOf('t')); // Getting the index of the character 't'

//study methods of string like to lower case there are many mrthods


const newstring = gameName.substring(0,4) //imp*** here last value is not included        //newstring here is seperate variable 0 is start and 4 is end
console.log(newstring);//gives hite


const anotherString = gameName.slice(-8,4) //here we can give negative numbers
console.log(anotherString);//gives ite skip 5 character fron last


const newstringOne = "    aston    ";
console.log(newstringOne.trim());//in this it will ignore spaces





const url ="https://aston.com/aston%20monteiro"

console.log(url.replace('%20','-'));//replacing %20 with - so that url is usable

console.log(url.includes('aston'));//it says weather that keyword is there or not

console.log(gameName.split('-'));//it splits to give arrays here we splitted on basis of - we can split by space also ther are other method also




s


