const TinderUser = new Object()//singulton
const tinderUser = {}//not singulton if it declared in  flower brackets
console.log(TinderUser);
console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name = "aston"
tinderUser.isLoggedIn = false
console.log(tinderUser);

//---------------------------------------------------------------------------------------------

const regularUser = {
    email: "some@gmail.com",
    fullname: {//here full name is boject inside that userfull name is another obtect
        userfullname: {
            firstname: "aston",
            lastname: "monteiro"
        }
    }
}
console.log(regularUser.fullname);//accesing objects
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"} //1 is key inside thata string a is there
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }// combinig objects but it creates problem object inside ibject
const obj4 = Object.assign({}, obj1, obj2,obj5)//bractes is optional parameter but giving that is good ||this step combining objects

const obj6 = {...obj1, ...obj2}//combing objects
console.log(obj6);


const users = [//when data comes fron database comes in array
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//asking key of kindeuser like id
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//ever key and value is fiven in array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//aking is islogged in value  is there





//studing destrusture 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//accesing objects
course.courseInstructor

const {courseInstructor } = course//in this method for accesing we dont have to use cource .courseinstructor again and again (for acessing muctiple time) direct console.log
console.log(courseInstructor);

const {courseInstructor:instructor } = course//in this instead insted of courseinstructor in cone log we can just use instructor
console.log(instructor);


//API call
// this is JSON (obtect notation)(api in object)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//APi in array
[
    {},
    {},
    {}
]