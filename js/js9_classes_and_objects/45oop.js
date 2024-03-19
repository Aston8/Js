const user = {
    username: "Aston",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);//this is used to say that username is here(in this context)
        console.log(this);//gives everythis in this
    }

}
//this section is printing of objects
console.log(user.username)
console.log(user.getUserDetails());
console.log(this);//printing this in global will give nothing









 function User(username, loginCount, isLoggedIn){
     this.username = username;//this.username is referred as variable
    this.loginCount = loginCount;
     this.isLoggedIn = isLoggedIn

     this.greeting = function(){//writing methods
         console.log(`Welcome ${this.username}`);

     }

     return this //not need to write. it is default 
 }

 const userOne = new User("hitesh", 12, true)
 const userTwo = new User("ChaiAurCode", 11, false)//if we not use new it will override data 
 //when we print userone it will give values of user two
 console.log(userOne.constructor);//constuctor is reference
 console.log(userTwo);