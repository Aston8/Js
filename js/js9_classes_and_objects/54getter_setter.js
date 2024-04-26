class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){//if we declare get we have to declare set also
        return `${this._password}hitesh`//we we do not use some what like new variable(_passaword) if will give error because here also we atre using variable as passaword and abovbe also
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);