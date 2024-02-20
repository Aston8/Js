let score = "33abcn"

console.log(typeof score);
console.log(typeof(score));//same as above

//we will get typeof as number

//after this change 33 as string by doing changes |33 to "33"|
//now run we get type of as string


let valueInNumber = Number(score)// this is coverting line ;Number N should be capital because it is data type
console.log(typeof valueInNumber);

//now typeof valueinnumber gives number
//now change score=33 to 33abc but when we convert it will give as number only but it should not give because it is not a number

console.log(valueInNumber);//checking what is in valueinumber we get NaN


//chnage 33abc to null now converting value gives 0
//chane null to undefined converting value gives NaN
//change undefined to boolean value true converting value gives 1(if it is false then 0)
//when we change true to aston it gives NaN

//summarizing in shortform
//"33"=>33
//"33abc"=>NaN
//true =>1; false=>0




