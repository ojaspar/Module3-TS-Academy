// // var, let, const
// //var greeting = "Hello, World!";

// // Using let to declare a variable
// //let greeting = "Hello, World!";

// let firstNum = 5;
// let secondNum = 10;
// let result = firstNum + secondNum;
// var age = 25;
// var name = "Alice";

// var islocked = false;
// var isunlocked = true;

// var array = [1, 2, 3, 4, 5];
// var studentArr = ["John", "Jane", "Jim", "Jill"];

// for (let firstNum = 0; firstNum < 3; firstNum++) 
// {
//     console.log(array[firstNum]);
// }

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020 ,
//     colour: "Blue"
// }

//console.log(studentArr.sort());
//console.log("Name: " + name + ", Age: " + age + ", Sum: " + result  );
//console.log(result);


//8, 4, 5, 6, 7, 9, 7, 7,10, 11


//Assignment
//List all the keywords in javascript
//threading
//history of javascript

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name? ", function(name) {
//     console.log("Hello " + name);
//     rl.close();
// });

// var principalAmount = 1000; // Principal amount in dollars
// var annualInterestRate = 5; // Annual interest rate in percentage
// var numberOfDays = 30; // Number of days the money is invested
function calculateInterest(principal, annualRate, days) {
    const interest = principal * (annualRate / 100) * (days / 365);
    return interest;
    //console.log("The interest is: " + interest);
}

const result = calculateInterest(7000, 36, 30);
console.log(result);

