console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
//we will get answers in true false



console.log("2">1);   //gives true   //js will convert string but we have to use same data type
console.log("02">1);//true


console.log(null >0);//we will get false
console.log(null ==0);//false
console.log(null>=0);//true ,comparision convert null to a number treating it as zero,thats why null>0 is false and null>=o is true

console.log(undefined ==0);//in all cases false
console.log(undefined >0);
console.log(undefined <0);

//equality== and comparision >< >= work differently

//---------------------------------------------------------------------------------------------------------------


//=== strict check (checks data tupe also)
console.log("2"===2);//now it will give false

