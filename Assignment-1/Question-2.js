// Q2 -> Arrow Function

// Normal Function
const firstLetters = function(firstName, lastName)
{
    let output = firstName.charAt(0) + lastName.charAt(0);
    return output;
}
console.log(firstLetters("dexter", "kush"));


// Using Arrow function

// const firstLettersUsingArrow = (firstName, lastName)=>{
//     let output =  firstName.charAt(0) + lastName.charAt(0);
//     return output
// }
// console.log(firstLettersUsingArrow("Dexter", "Kush"));
