

// Refactor the following function into a one-liner:

// const printName = (name) => {
//                      return ('Hi ' + name);
//            }
// console.log(printName("dexter"));

const printName = name =>  "Hi " + name;
console.log(printName("Kushagra"));



// Rewrite the following code using template literals

// const printBill = (name, bill) => {
//       return “Hi “ + name + “, please pay: “ + bill;
//            }


const printBill = (name, bill) => {
    return `Hi ${name}, please pay: ${bill}`;
  }
  console.log(printBill("Kushagra",  4536));




// Modify the following code such that the object properties are destructured and logged.

// const personn = {
//                  name: 'Noam Chomsky',
//                  age: 92
//             }
           
//            let name = personn.name;
//            let age = personn.age;
//            console.log(name);
//            console.log(age);


// const personnn = {
//     name: "Noam Chomsky",
//     age: 92
//   }
  
//   let {name, age} = personnn;
  
//   console.log(name);
//   console.log(age);


