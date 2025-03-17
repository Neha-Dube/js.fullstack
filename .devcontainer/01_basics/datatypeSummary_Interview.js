/*on the basis of hoe the data is stored in the memory and accessed , datatype in JS is devided into two caregories
 Primitive and Non-Primitive DT
*/

//primitive datatype- call by value

/*
1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".
3.Boolean: Represents a binary value, either true or false, often used for conditional logic.
4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 
6.Symbol (ES6): it is mostly used used to find uniqnece.
7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.
*/

//Non- Primitve- call by reference

/*
1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.
2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].
3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) 
{ return x + y; }.
4.Date: Represents dates and times.
5.RegExp: Represents regular expressions for pattern matching.
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//bigInt
const bigNumber= 454657897654356789765432344545n

// typeof operator results for different dt
/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. You can assign different 
types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the
type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable 
type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully.
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/



