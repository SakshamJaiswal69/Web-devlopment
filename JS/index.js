// 1.ways to print in java script 

// alert("this is me");
/*console.log("this is me");
document.write("this is document");*/

//2.javascript Console API(application programing interface)

/*console.warn("this is warning");
console.error("ths is an error");
console.log("this is log");*/

// 3.Javascript variables
var num1 = 27;
var n2 = 33;
// console.log(num1+n2);

// 4.Datatype in Javscript
//Numbers
var num = 45;
var num2 = 56.05;

//String             
var str = "this is a string";
var str2 = 'this is also a srting';

//Objects
var marks = { aditya: 60, saksham: 82, prince: 66 };
// console.log(marks);

// Boolean
var a = true;
var b = false;
// console.log (a,b);

// undefined
var und;
var und1 = undefined
// console.log(und);
// console.log(und1);

// null 
var n = null;
// console.log(n);

// Arrays
var arr = [1, 2, 3, 4, 5, "Ayush", false];
// console.log(arr);

/*
At a very high level,there are two types of data types in JavaScript
1. primitive data types:undefined,null,number,string,boolean,Symbol
2.reference data types:Arrays and objects
*/
// 5.Operators in javascript
// arthematic operators
var a = 45;
var b = 55;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);
// console.log("the value of a%b is",a%b);

// assignment operators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
// console.log(c);

// comparision operators
var x = 45;
var y = 13;
// console.log(x==y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x>y);
// console.log(x!=y);

// logical operators
/*Logical and &&*/
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or ||
/*console.log(true ||true)
console.log(false ||true)
console.log(true ||false)
console.log(false ||false)*/

// Logical not !
/*console.log(!true);
console.log(!false);*/

// 6.Functions in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(68, 74);
c2 = avg(86, 88);
// console.log(c1,c2);

// 7.Conditionals in JavaScript
/*
var age=17;
// Single if Statement
if(age>18){
    console.log("you can drink Alchol");
}
// if else Staement
else{
    console.log("you cannot drink alchol");
}
// if else Ladder
age=25;
if(age>32){
    console.log("you are not a minor");
}
else if(age>26){
    console.log("you can drink alchol and vote");
}
else if(age>18){
    console.log("you can vote");
}
else{
    console.log("you are a minor");
}
*/
// 8.Loops in JavaScript
// 1.for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ayush"];
for (var i = 0; i < arr.length; i++)
    if(i==3){
        // continue;
        break;
    } 
    // {console.log(arr[i]);}

// 2. For each Loop
arr.forEach(function (element) {
    // console.log(element);
});
// 3. While Loop
let j = 7;
while (j < arr.length) {
    console.log(arr[j]);
    j = j + 2;
}
// 4. Do while Loop
do{
    console.log(arr[j]);
    j = j + 1;
} while(j < arr.length);
