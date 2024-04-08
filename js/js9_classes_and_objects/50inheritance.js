class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{//extends is keyword like prototype // now we can acess all functionality of user
    constructor(username, email, password){
        super(username)//super keyword automatically calls  
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()//we can use here chai.addcourse


const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof User);//checing chai is a instance of user