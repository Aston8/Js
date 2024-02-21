const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){//this is call back function
         console.log(val);
 } )

 coding.forEach( (item) => {//using arrow function
     console.log(item);
 } )







 function printMe(item){
     console.log(item);
 }

 coding.forEach(printMe)






coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
} )








const myCoding = [//objects inside array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )