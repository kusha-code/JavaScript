// 1. Ways to Print in JavaScript
//console.log("Hello World")    
//alert("me")
//document.write("This is document dot write")

// 2. JavaScript console API
// console.log("Hello world ", 4 + 6, "another log")
// console.warn("This is  a warning")
// console.error("This is an Error");
 
// 3. JavaScript Variables
var number1 = 56;
var number2 = 44;
// console.log(number1 + number2);

// 4. DataTypes in JavaScript

    // I. Primitive Data Types - undefined, number, string, boolean, symbol
    //Numbers
var num1 = 455;
var num2 = 45.55;

//String
var str1 = " This is a String";
var str2 = 'single quote string';



// Booleans
var a = true;
var b = false;
// console.log(a,b);

var und
//console.log(undefined);
// console.log(und);

var n = null;
// console.log(n);

    //II. Reference DataTypes - Objects and Arrays

    // Objects
var marks = {
    kush: 90,
    yash: 99,
    ajit: 78
}
// console.log(marks);

// Arrays
 //var arr = [1,2,"kamahamehaa",3,4,5]
//  console.log(arr);

//Operators in JavaScript

var a =  100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

//Assignment operator
var c = b;
// c += 2;
// c /= 2;
// console.log(c);

// Comparison Operators

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// Logical Operators

// console.log(true && true);
// console.log(true && false);
// console.log(true || true);
// console.log(true || false);

    // Logical Not
// console.log(!true); 
// console.log(!false);

// JavaScript Functions

//DRY = Do not Repeat Yourself

function avg(a, b){
    return(a+b)/2;
}

c1 = avg(4, 6);
c2 = avg(1.2, 1.8)
//console.log(c1, c2);


// Looping statements

// var arr = [1,2,3,4,5,6,7];
// // console.log(arr);
// for(var i =0; i<arr.length;i++){
//     if(i==0){
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element) {
//     console.log(element);
// });
// ----------  OR ---------- //

// arr.forEach(element => {
//     console.log(element);
// });
// const ac = 0;
// ac = ac + 1;

let j = 0; 
// while (j<arr.length) 
// {
//     console.log(arr[j]);
//     j++;    
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

let myArr = ["Fan", 'Camera', 34, null, true];
//Array Methods
//console.log(myArr.length); // number of elements
// myArr.pop();
// myArr.push("Kush")
// myArr.shift()
// console.log(myArr.unshift("Kush"))
// console.log(myArr);
// console.log(myArr.toString());


//String Methods in JavaScript

let myString = "Dexter is a good buoy"
// console.log(myString.indexOf("good"));

//console.log(myString.slice(0,3)); //from 0 to n-1
d = myString.replace("Dexter", "Kushagra")
d = d.replace("good", "byad")
//console.log(d," ", myString);
//console.log(myString.replace("Dexter", "Kush"));

//Date Function
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());