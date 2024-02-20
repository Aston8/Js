const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);// it gives an array inside marvel heros(fourth element is an array od dc heros) now the forth element is an array which creates problem(run and see you can understand)
console.log(marvel_heros[3][1]);//asks value of fouth  element inside that secoond element gives flash

const confusion_heros = ["thor", "Ironman", "spiderman"]
const allHeros = confusion_heros.concat(dc_heros)//merges marvel heros and dc heros in a single array
console.log(allHeros);

const all_new_heros = [...confusion_heros, ...dc_heros]//spread operation mostly this syntax is uesd to combine two arrays (... arrayname)
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//if array is there inside another array to give in single array and infinity is the depth we can give numbers to how many depth should solve
console.log(real_another_array);



console.log(Array.isArray("aston"))//asking this array is there it gives false

console.log(Array.from("Hitesh"))//asking to create array

console.log(Array.from({name: "hitesh"})) // interesting gives empty array directly it not converts we have to say wheather to create key array or create values array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//converts thesescore into array