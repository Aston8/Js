
//for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}//myobject[key] is for getting value and key used gor getting key values









const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);//gets key values 0,1... because it is array
}


for (const key in programming) {
    console.log(programming[key]);//gives value
}








 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America") 
 map.set('Fr', "France")
 map.set('IN', "India")

//  for (const key in map) {
//      console.log(key);
//  }//cannot be iteratable using foe in