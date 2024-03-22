#! /usr/bin/env node
import inquirer from 'inquirer'

// 1) cmputer will genrate a random number
// 2) user input for guesinng number
// 3) compare user input with computer generated number and show result
console.log("Welcome to the Guessing game!")
let randomnum= Math.floor(Math.random()* 10)
const answer = await inquirer.prompt(
    [{name:"userguessednumber",
      type:"number",
        message:"please guess the number"}
      ]);
        if(answer.userguessednumber== randomnum){
            console.log("Congratulation you guesed the right number");
        }
        else{
          console.log("you guessed the wrong number")}