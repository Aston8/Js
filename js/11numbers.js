const score = 400
console.log(score);//here wenot declaring as number but js aututomaticallyu detects as number


const balance = new Number(100);
console.log(balance);//here we are declaring a number and new is keyword

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));//giving precision

const othernumber = 23.5677
console.log(othernumber.toPrecision(3))//it returns string and focuses only on 3 nubers now it will five 23.7
//if it is 123.456 with precision 3 i will give 123

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));//it will put comas to numbers but default it wiil put coma after 3 to chane to indian write inde bracket 'en-In'

  //----------------------------------------------------math-------------------------------------------------------------------

 console.log(Math);//when we run here it will give only object but when we  use in inspect it will give all math function whwn we click arrow

 console.log(Math.abs(-4));//give absolute give 4

 console.log(Math.round(4.6));

 console.log(Math.ceil(4.2));//gives up value like here 5

 console.log(Math.floor(4.9));//here 4

 console.log(Math.min(4, 3, 6, 8));//gives min

 console.log(Math.max(4, 3, 6, 8));//hives max

console.log(Math.random());// when we run it gives value between 1 amd zero 

console.log((Math.random()*10) + 1);// if we wand random values "logic  to shift value because rand gove 0.something and +1 to avoid 0.01 like this we get vaule always greater than 1 to 9"

console.log(Math.floor(Math.random()*10) + 1);//to avoid point values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//to get value between we want syntax min is not inside random +min is inside bracket floor