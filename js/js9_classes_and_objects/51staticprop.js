class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){//when user is created it gives id
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) //createId is there but we cant use (static)

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId()); //we cannot acess here also