#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\tWelcome to tooba_rafiq - CLI Number_Guessing_Game\n");
const ramdomNumber = Math.floor(Math.random() * 3 + 1);

const anwser = await inquirer.prompt([
    {
        name: 'userGuessedNumber',
        type: 'number',
        message:'Enter you guess number(Number limit from 3 to 1)'
    }
])
if(anwser.userGuessedNumber === ramdomNumber){
    console.log('Congratulation! you guess a correct number.')
}
else{
    console.log("Sorry! You guess a wrong number.")
}