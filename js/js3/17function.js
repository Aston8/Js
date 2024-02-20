
function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("O");
    console.log("N");
    console.log("W");
}//function definition
sayMyName()//callimg funtion (this is just exampple) it executes function




function addTwoNumbers(number1, number2){

     console.log(number1 + number2);
 }
 addTwoNumbers(3,4)

 const result = addTwoNumbers(3,5)
 console.log("result:",result)//here if we print resut it will give undefined | storing value in funtion refer below



function OneaddTwoNumbers(number1, number2){

   let result = number1 + number2
    return result//after return no code will work like if we wrinte anyt cone lore or any
}

function TwoaddTwoNumbers(number1, number2){//one more method
  return number1 + number2
}
const resultone = TwoaddTwoNumbers(3, 4)
console.log("Result: ", resultone);//now the value comes



function loginUserMessage(username){
    
    return `${username} just logged in`
}
console.log(loginUserMessage("aston"))//printing called function //if we do not pass value it comes undefined just logged in


function loginUserMessageone(usernameone){
    if(usernameone === undefined){
        console.log("PLease enter a username");
        return
    }
    return `${usernameone} just logged in`//this line does not executes if condition completes because we have iused return there
}
console.log(loginUserMessageone())//if does not  pass value only it comes undefined so we are using if here






function loginUserMessagetwo(usernametwo){//this syntax is used in profesional code
   if(!usernametwo){//username is undefined which is considered as false to make it true we are using not so that if condition applies
       console.log("PLease enter a username");       
       return
    }
    return `${usernametwo} just logged in`
}
console.log(loginUserMessagetwo())//perfors same as above



function loginUserMessagethree(usernamethree="sam"){//giving default value if username is not given
    if(!usernamethree){
        console.log("PLease enter a username");       
        return
     }
     return `${usernamethree} just logged in`
 }
 console.log(loginUserMessagethree())
//console.log(loginUserMessage("aston"))//if passed this name comes otherwize sam



