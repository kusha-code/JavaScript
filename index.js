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



            // Custom Objects



function makePerson(first, last) {
    return {
      first: first,
      last: last
    };
  }
  function personFullName(person) {
    return person.first + ' ' + person.last;
  }
  function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
  }
  
//   var s = makePerson('Simon', 'Willison');
//   personFullName(s); // "Simon Willison"
//   personFullNameReversed(s); // "Willison, Simon"
// //   console.log(personFullName(s));
//   console.log(personFullNameReversed(s));
  


// Attaching function to an Object



  function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
  }
  
  var s = makePerson('Simon', 'Willison');
//   console.log(s.fullName()); // "Simon Willison"
//   console.log(s.fullNameReversed()); // "Willison, Simon"

  var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
// console.log(fullName()); // undefined undefined



//taking advantage of This to improve makePerson



function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
      return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
      return this.last + ', ' + this.first;
    };
  }
  var s = new Person('Simon', 'Willison');
//   console.log(s.fullName());
//   console.log(s.fullNameReversed());

  
  
// -----------prototype Object-----------

function Person(first, last){
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function(){
    return this.last + ',' + this.first;
};

// var s = new Person('Simon', 'William');
// // s.firstNameCaps(); //not a function error in L1

// Person.prototype.firstNameCaps = function(){
//     return this.first.toUpperCase(); //SIMON
// }
// console.log(s.firstNameCaps());



// Adding other things to Prototype

var s = 'Simon is good man';
var t = 'B a n a n a';
//s.reversed(); // error-not a function

String.prototype.reversed = function(){ 
    var r = '';
    for(var i = this.length-1; i >= 0; i--){
        r += this[i];
    }
    return r;
}
// console.log(s.reversed());
// console.log(t.reversed()); // this function even works on string literals.

// var s = new Person('Simon', 'Willison');
// console.log( s.toString()); // [object Object]

// Person.prototype.toString = function() {
//   return '<Person: ' + this.fullName() + '>';
// }

// console.log( s.toString()); // "<Person: Simon Willison>"




// ----------Closures----------





function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  var add5 = makeAdder(5);
  var add20 = makeAdder(20);
//   console.log(add5(6)); // 
//   console.log(add20(7)); // 
//   console.log(add20(11));
  

// -----------DOM Manipulation--------

let elemId = document.getElementById('click');
let elemClass = document.getElementsByClassName('container')
// console.log(elemId);
// console.log(elemClass);
// elemClass[0].style.background = "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
 tagName = document.getElementsByTagName('div')
//  console.log(tagName);
//  createdElement = document.createElement('p');
//  createdElement.innerText = "This is a created para";
 //tagName[0].appendChild(createdElement);



//  function clicked(){
//      console.log("The button was clicked");
//  }

//  window.onload = function(){
//     //  console.log("document was loaded");
//     console.log("document was loaded");
//  }

// //  <<--------EVENTS IN JS---------->>

//  firstContainer.addEventListener('click', function(){
//      document.querySelectorAll('.container')[1].innerHTML = "<b> You just clicked here <b>"
//      console.log("Click on Container");
//  })

//  firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse Out of Container");
// })
//  let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> You just clicked here <b>"
//     console.log("Mouse DOWN when clicked on Container");
// })


//-----------Arrow Functions---------


function summ(a,b){
    return a+b;
}

summ = (a,b) => {
    return a+b;
}

logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired <b>"
    console.log("I am your log");
}


// ------SetTimeOut and SetInterval----------


// setTimeout((logkaro) => {
//     console.log("I am you log");
// }, 2000);

// setTimeout(() => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set Timeout Fired <b>"
// }, 2000);


// setInterval(logkaro, 2000);

// clr = setInterval(logkaro, 2000); //to stop setInterval we use clearInterval in console.

// clr = setTimeout(logkaro,5000); ////to cancel setTimeout we use clearTimeout in console.




// ---------Local Storage--------


// localStorage.setItem('name', 'kushagra')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();


//--------JSON-----------

// obj = {name: 'kushagra', length: 1, a: {this: 'that'}}
// jso = JSON.stringify(obj)
// console.log(jso);
// console.log(typeof jso);

// parsed = JSON.parse(`{"name":"kushagra","length":1,"a":{"this":"that"}}
// `)
// console.log(parsed);








// ---------------Assignment 2--------------




// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");


        //Using Promise, Async-await

    // function getData(uId) {
    //     return new Promise(resolve => setTimeout(() => {
    //       console.log("Fetched the data!");
    //       return resolve("skc@gmail.com");
    //     }, 4000));
    //   }
    //   console.log("start");
    //   async function runner(){      
    //     let email = await getData("skc");
    //     console.log("Email id of the user id is: " + email);
    //     console.log("end");
    //   }
    //   runner();




    // -------------ES6----------------



    // 1 - Let


    if (true) {
        let numbre = 40;
        console.log(numbre); //40
       }
       //console.log(numbre); // undefined

    //    let numA=50;
    //    let numB=100;
    //    if(true){
    //        let numA = 60;
    //        let numC = 10;
        //    console.log(numA/numC);
        //    console.log(numB/numC);
       //}
       //console.log(numC);
       //console.log(numB);

    //    2 - Const

    // const numA = 50;
    // // numA = 60;
    
    // const Languages = ['Js', 'Ruby', 'Python'];
    // Languages.push('Java');
    // console.log(Languages);


    // Arrow function

    //old syntax

    function oldOne() {
        console.log("Hello World...");
    }

    //New Syntax

    var newOne = () => {
        //console.log("Hello world...!");
    }


    let NewOneWithParameters = (a, b) => {
        //console.log(a+b); // 30
       }
       NewOneWithParameters(10, 20);


       // Default Parameters

       let Func = (a, b = 10) => {
        return a + b; 
       }
       //console.log(Func(40));  // 40 + 10 = 50

       let NotWorkingFunction = (a = 10, b) => {
        return a + b;
       }
       //console.log(NotWorkingFunction(20,30)); // NAN. Not gonna work.


       // for..of Loop

    //    for (const iterator of object) {
    //        //syntax of for..of
    //    }

       let arr = [1,2,3,4,5];
       for (let value of arr) {
           //console.log(value);
       }

       let string = "JavaScript";
       for (let xxxx of string) {
           //console.log(xxxx);
       }



       // spread attribute(...params)


       //console.log(Math.max(10, 20, 60, 100, 50, 200)); //returns 200
       
       let arr22 = [10,20,30,40]
        //console.log(Math.max(arr)); // returns NaN

       console.log(Math.max(...arr22)); //returns 40



       // Maps

    //    var newMap = new Map();
    //    newMap.set('name', 'kush');
    //    newMap.set('id', 123);
    //    newMap.set('interest', ['JS', 'Java', 'Python']);

    //    newMap.get('id')     //123
    //    newMap.get('name')       //kush
    //    newMap.get('interest')       //['JS', 'Java', 'Python']

    //    newMap.set('name', 'dexter')

    //    newMap.size;
    //    newMap.keys();
    //    newMap.values();

        // var map = new Map();
        // for (let element of map) {
        // console.log(element);
        // }
        
        
        // var map = new Map();
        // for (let [key, value] of map) {
        // console.log(key+" - "+value);
        // }


        // SETS

        var sets = new Set();
        sets.add('a');
        sets.add('b');
        sets.add('a') //duplicate value

        for (const element of sets) {
            //console.log(element);
        }

        var sets2 = new Set([1,5,6,7,9])

        sets2.size;      //5
        sets2.has(1);    //true
        sets2.has(10);  //false

        
        // Static Methods

        class Example {
            static Callme() {       //didn’t use the keyword ‘function’ inside Class.

            //console.log("Static method");
            }
           }
           Example.Callme();  //call the function without creating any instance for the class.
        

           // Getters and Setters


           class People {
            constructor(name) {
                  this.name = name;
                }
                get Name() {
                  return this.name;
                }
                set Name(name) {
                  this.name = name;
                }
            }
            let person = new People("Jon Snow");
            // console.log(person.Name);
            // person.Name = "Dany";
            // console.log(person.Name);




            

            





    






















       