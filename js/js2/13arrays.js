// array

const myArr = [0, 1, 2, 3, 4, 5]//array are written in square bracket
const myHeors = ["shaktiman", "naagraj"]
//copy operaton:
//shallow copy-changes original(same reference point)
//deep copy -do not share same reference

const myArr2 = new Array(1, 2, 3, 4) //here declaring array using keyword


console.log(myArr[1]); //accessing array of index 1

// Array methods

myArr.push(6)//pushes 6 to my Array
myArr.push(7)
myArr.pop()//removes last value of array
console.log(myArr);//here run and see what is there in array now


myArr.unshift(9)//inserts 9 at the start of the array but the problem is we need to shift all the position of array which takes load on computer
console.log(myArr);
myArr.shift()//removes first element of array
console.log(myArr);


console.log(myArr.includes(9));//gives boolean value wheather 9 is there in an array ot not
console.log(myArr.indexOf(3));//asking the index value os 3
console.log(myArr.indexOf(19));//if we ask index value that does not exist it gives -1



const newArr = myArr.join()//joint coverts array to string
console.log(myArr);//here gives in array format
console.log( newArr);//here gies only the value of array and typeof is string



// slice, splice 
//here A B C used just for reference 
//A original myArr
//B after using slice
//C after using splice

console.log("A ", myArr);//original array
const myn1 = myArr.slice(1, 3)//gives values from array of index 1 and 3 but not 3
console.log(myn1);//slice operation
console.log("B ", myArr);//afer using slice


const myn2 = myArr.splice(1, 3)// gives valuse of index 1 2 and 3 //  ***imp removes these elements fron original array(changes the array)
console.log(myn2);//prints splice operation
console.log("C ", myArr);//after using splice
