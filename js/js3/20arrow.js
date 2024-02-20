const user = {
    username: "aston",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //when we use ` inside brackects (current context,scope) we will use this.
        console.log(this);//this will give all the vales of variables
    }

}

user.welcomeMessage()
user.username = "sam"//changing context
 user.welcomeMessage()

console.log(this);//for this it will give empty







 function chai(){
     let username = "Aston"
     console.log(this.username);//cant use this in functions we will get undefined
 }

 chai()




 const chaione = function () {
     let username = "hitesh"
     console.log(this.username);
 }
 chaione()//we will get undefined



 const chaitwo =  () => {//arrow function
     let username = "hitesh"
     console.log(this);
 }
chaitwo()//we cant use this here also




 const addTwo = (num1, num2) => {
     return num1 + num2
 }
 console.log(addTwo(3, 4))




const addThree = (num1, num2) =>  num1 + num2//next function we are using() because without brackets we cant access objects and in this type return function is not required
console.log(addThree(3, 4))



 const addfour = (num1, num2) => ( num1 + num2 )//we need not use return 
 console.log(addfour(3, 4))



const addfive = (num1, num2) => ({username: "Aston"})
 console.log(addfive(3, 4))




 