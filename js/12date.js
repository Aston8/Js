// Dates

let myDate = new Date() //new date is creating object
console.log(myDate);//comes date but it is not readeable
console.log(myDate.toString());//run and see
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//typeof comes as object

let aCreatedDate = new Date(2023, 0, 23)
console.log(aCreatedDate.toDateString());//month will start from 0 comes as mon 23 jan 2023

let bCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(bCreatedDate.toLocaleString());//5 and 3 are time 

let cCreatedDate = new Date("2023-01-14")//yy-mm-dd
console.log(bCreatedDate.toLocaleString());

let dCreatedDate = new Date("01-14-2023")//mm-dd-yy
console.log(dCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);//comes current time in milli second

console.log(dCreatedDate.getTime()); //gives this variable time in milisecond |useful to compare this date and current date

console.log(Date.now);//comes dade in milli second to convert to second divide by 1000 and use floor to avoid decimal
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );//+1 beacuse month starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` //this method is to write sentence 

newDate.toLocaleString('default', {
    weekday: "long",//use control space to see varios method in tyhis give weeks in long forfat like monday
    
})