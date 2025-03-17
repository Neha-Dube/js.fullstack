//--------------------------------------------------------------------conversion to number

let score="33"
console.log(typeof score)
console.log(typeof (score))

//to convert value from strign to number
let valueInNumber= Number(score)
console.log(typeof valueInNumber)

/*
if score is 44ad then also numer(score) will change it into number but it should not, so 
we should check value of valueInNumber variable- in this 44ad case its vale will be NaN- not a number
console.log(valueInNumber) - o/p --> NaN
same will happen if the provide the score value as undefined
*/


/*
In case score is null, the when we will change it to number, it will give 0 as value of valueInNumber
*/

let scoreNan= "44ad"
let scoreNull= null
let scoreUndefined= undefined
console.table([Number(scoreNan), Number(scoreNull), Number(scoreUndefined)])

/*
for boolean if true, we'll get 1, else 0
*/

let scoreBoolT= true
console.log(Number(scoreBoolT))
let scoreBoolF= false
console.log(Number(scoreBoolF))

/* if there is actual string we are trying to convert into number then again it will give NaN */

let string= "Neha"
console.log(Number(string))

//---------------------------------------------------------------------conversion to boolean

let isBoolean= 1
console.log(Boolean(isBoolean))

/*
if we provide below values to isBoolean the following will be the output after Boolean conversion
1===true
0===false
(empty string)""===false
"neha"====true
*/


//----------------------------------------------------------------------------conversion to string

let aVariable= 55
let toString= String(aVariable)
console.log(toString)
console.log(typeof toString)

let bVariable= true
console.log(String(bVariable))
console.log(typeof String(bVariable) )

let cVariable= 67.9
console.log(String(cVariable))
console.log(typeof String(cVariable))

//********************************************operations***********************************************


 //operations as in initially some basic mathematic operations-->+,-*,/,%(to get remainder)
 let value=3
 let negvalue= -value
 console.log(negvalue)

 //then string concatination using + operator
 let str1="neha"
 let str2="dubey"
 let str3= str1+str2
 console.log(str3)

 console.log("1"+ 2)  //output is 12
 console.log(2+"1")   //output is 21
 console.log(2+1+"3")   //33
 console.log("1"+2+4+5)  //1245
 console.log(true)
 console.log(+true)  //1
 console.log(+"")  //0


 let num1, num2, num3
 num1=num2=num3=2+2


 /*prefix nd postfix operator- prefix- value increases/decreases first then use further, postfix-- fisr var is used then
 its value gets increased or decreased */

 let gameCounter=100
 gameCounter++
 console.log(gameCounter);  //output is 101 , even for ++gameCounter too the value will be 101

 