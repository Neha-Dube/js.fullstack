const accountId= 5687
let accHolderName= "Neha"
var bankName= "SBI"
accCity="Pune"
let accState;

//Line-1 const variable value can't be modified further
//Line-4, allowed to use var this(below) way too but not recommended
//One way to print-- console.log(accHolderName)
//In Js, it is not mandatory to use semi-colon
//Line-5 js gives undefined if we only declare the var, not provide its value

accHolderName="BOS"
bankName="FurrBI"
accCity="Rbl"
//another way to print multiple var at the same time,not one by one
console.table([accountId, accHolderName, bankName, accCity, accState])



/* prefer not to use var, because of issue in block scope and functional scope
backStory of var- it does have any scope so if there are two var named  let name then 
change in any one will change the other name variable value too
*/
