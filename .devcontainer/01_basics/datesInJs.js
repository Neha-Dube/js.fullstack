let myDate= new Date()
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toString())

//in js 0 indicated january, first month of the year
let myCreatedDate= new Date(2025, 0, 20)
console.log(myCreatedDate.toDateString());

let anotherDate= new Date(2025, 1, 20, 1, 26)
console.log(anotherDate.toLocaleString());   //2/20/2025, 1:26:00 AM
console.log(anotherDate.toLocaleDateString());    //2/20/2025
console.log(anotherDate.toLocaleTimeString())    //1:26:00 AM

//1 is january but when using yyyy-mm-dd format then 01 is january
let newDate= new Date("2025-01-20")
console.log(newDate.toLocaleString())

let myTimeStamp= Date.now()
console.log(myTimeStamp);
//output to above will be a log date, which is total milli sceond from 1 jan, 1970
console.log(newDate.getTime());
//output of abv will be same, in milliscnds, now we can compare the times, myTimeStamp and newDate

//to convert in sceonds
console.log(Date.now()/1000)
//here we will get the output in decimals which we do not want, to fix do below
console.log(Math.floor(Date.now()/1000))

//date and time is bit complex topic
let newDateOfMonth= new Date('20, 03, 2025')
newDateOfMonth.toLocaleString('default', {
    weekday:"long"
})






