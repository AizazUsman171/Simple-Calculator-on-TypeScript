#! usr/bin/env node           // it tells that this file is terminal executable not only on local system but other people 
//can also execute this code their CLI using npm tool(this line is called Shabang)
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter First Number", type: "number", name: "firstNumber" }, { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operator to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Division", "Multiplication"] }]); //await means  wait  for input 
console.log(answer);
if (answer.operator === "Addition") {
    // console.log("Your value is "+ answer.firstNumber+answer.SecondNumber);  this is wrong convention string ko concatenate mat karo with number
    console.log("Your value is: ");
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    // console.log("Your value is "+ answer.firstNumber+answer.SecondNumber);  this is wrong convention string ko concatenate mat karo with number
    console.log("Your value is: ");
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    // console.log("Your value is "+ answer.firstNumber+answer.SecondNumber);  this is wrong convention string ko concatenate mat karo with number
    console.log("Your value is: ");
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    // console.log("Your value is "+ answer.firstNumber+answer.SecondNumber);  this is wrong convention string ko concatenate mat karo with number
    console.log("Your value is: ");
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    console.log("Please select valid operator");
}
