// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    console.log(element);
    
}
//------------------------------------------------------------------



for (let j = 0; j <= 10; j++) {
    const ele = j;
    if (ele == 5) {
        console.log("5 is best number");
    }
    console.log(ele);
    
}

//----------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j= 1; j<= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );//here it is i*j and befrore i*j is written for output statement
   }
}



