const score=400
console.log(score);

const balance= new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(typeof (balance.toString()));
//toFixed() is used to set the number of digits after decimal point, 2 meaning may the actial value is 100.000,
// it will give 100.00 only
console.log(balance.toFixed(2));

const otherNumber= 123.12
console.log(otherNumber.toPrecision(2)); //23.9
/* when 23.896 and precision is 2---->24
   123.12 and precision is 2 then 1.2e+2
   it basically round off the value as per the precision given also make their exponential form when requires
*/

const hundreds= 10000000
console.log(hundreds.toLocaleString());  //10,000,000
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000



//*******************************************maths****************************//

//math is an object in js and has many properties
console.log(Math);  //Object [Math]{}
//to check more detailed info run above code in console

console.log(Math.abs(-4));  //4
console.log(Math.abs(4));   //4
console.log(Math.round(4.3));  //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));   //top value-- 5
console.log(Math.floor(4.6));  //lowest value -- 4 

console.log(Math.random())  //will always give any value between 0 and 1
/*for scensrios like dice game we know the value should be between 1 and 6 only, so to get the we can use random()*10,
now since value can be 0 too so to avoid that 0 situation, we always add 1
below is not exact code for dice game , but just to explain the situation
*/

console.log((Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1 ))+min);











