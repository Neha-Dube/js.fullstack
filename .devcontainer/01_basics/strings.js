//String concatination using string interpolation

let profile= "fullstack developer"
let technology= "python"
console.log(`Hi, I am a ${technology} ${profile}.`);

//string decalration

const gameName= new String("fullstack")
/*internally(can been seen if run the above code to any console)
//String {'fullstack'}
0: "f"
1: "u"
2: "l"
3: "l"
4: "s"
5: "t"
6: "a"
7: "c"
8: "k"
length: 9

//String methonds- below

[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim() //removes starting and ending space around a string
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "fullstack"

*/
console.log(gameName[0])  //f
console.log(gameName.__proto__);   //{}

console.log(gameName.length);  //9
console.log(gameName.toUpperCase());   //FULLSTACK

//***************************************************Slicing***********************************//



//most impt method- slice(), syntax is string.slice(start, end), start- inclusive, end-exclusive
//here slicing is different from python

const newString =gameName.substring(0,4)
console.log(newString);// 0,2,3, end is ommitted  //full

//1. basic slicing
let str="Hello World!"
console.log(str.slice(0,5));  //Hello

//2. omitting end
console.log(str.slice(7));   //orld!

//Negative indexing
//count from the end of the string
console.log(str.slice(6,-1));   //World

//reversing a string
//not directly possible, but can combine with split() and join()
console.log(str.split("").reverse().join());    // !,d,l,r,o,W, ,o,l,l,e,H

//*************************************************substring*****************************//

//similar to slicing but doesn't support negative indices.
//point to remember if the start is greater than end then it will internally swap them
console.log(str.substring(0,5));   //Hello
console.log(str.substring(7));     //orld!













