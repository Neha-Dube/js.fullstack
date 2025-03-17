//I know basic comparision as in 2>1, 3<1, true then false

//comparision when dt is not same

console.log("2">1);  //true
console.log("02">1);  //true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/* the reason of line-9 nd line-11 output is, both comparision and == operator works differently,
comparision operator converts null to a number equal to 0 then performs comparision that is why we got true for null>=0
and false for null==0
*/

//strict check-->=== check not only value but its datatype too
console.log("2"==2);  //true
console.log("2"===2); //false()checking datatype too






