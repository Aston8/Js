// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN //other than this all are true 

//truthy values
// "0", 'false', " ", [], {}, function(){}





const userEmail = "aston@gmail.com"
if (userEmail) {//chercking useremail there or mot
    console.log("Got user email");//output is this line
} else {
    console.log("Don't have user email");
}





const userEmail1 = ""
if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");//output is this line
}



const userEmail2 = []
if (userEmail2) {
    console.log("Got user email");//output is this line
} else {
    console.log("Don't have user email");
}






 if (userEmail2.length === 0) {//checking email is there in an array
     console.log("Array is empty");
}




 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0) {//checking object iss empty or not
     console.log("Object is empty");
 }





 // Nullish Coalescing Operator (??): 
//first value will be executed exept null and undefined
 let val1,val2,val3,val4;
 val1 = 5 ?? 10
 val2 = null ?? 10
 val3= undefined ?? 15
 val4 = null ?? 10 ?? 20

 console.log(val1);
 console.log(val2);
 console.log(val3);
 console.log(val4);




 // Terniary Operator
// condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")