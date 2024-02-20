let a = 300

if (true) {
    let a = 10
    const b = 20
    //var c = 300
    console.log("INNER: ",a); //her we can get vale of inside but we cant use outside

    //same problem when we declare c=300
    
}

//if we print c it will give value "it shoud not give because it is declared inside this is problem in var

// console.log(a);
// console.log(b);
// console.log(c);



//--------------------------------------------------



function one(){
    const username = "aston"

    function two(){
        const website = "youtube"
        console.log(username);//from function one can be accessed
    }
    //console.log(website);    this cant be used outside two
 
     two()//if we not calles two nothig will be executed

}

 one()



//-----------------------------------------------------------

 if (true) {
    const username = "Aston"
     if (username === "Aston") {
         const website = " youtube"
         console.log(username + website);
   }
     // console.log(website); cant be accessed outside if
}

//console.log(username); cant be accessed from first if








// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

 function addone(num){
     return num + 1
 }//here it prints value even if we call before



//addTwo(5)   //but here  if we declare before it will give error
const addTwo = function(num){
     return num + 2
 }
 addTwo(5)