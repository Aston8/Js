

 let myArray = ["flash", "batman", "superman"]
 console.log(myArray.length);

 for (let index = 0; index < myArray.length; index++) {
     const element = myArray[index];
     console.log(element);
    
 }





 // break and continue

for (let index = 1; index <= 20; index++) {
     if (index == 5) {
        console.log(`Detected 5`);
         break//as soon as found 5 come out of loop
     }
    console.log(`Value of i is ${index}`);
    
 }






for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`);
         continue//skipping that loop 
     }
    console.log(`Value of i is ${index}`);
    
 }