#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

// console.log(`  `);


                                                              
const stop=()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000);
    })
}
async function welcomeScreen(){
    let title=chalkanimation.rainbow("Hey! My name is Asif. This is my calculator project of TypeScript");//starting chalking animation 
    await stop();
    title.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);

    

 }
await welcomeScreen();
async function questionAsk(){
  const answers=await  inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"Please select the required operation \n",
        choices:["Addition","Substraction","Multiplication","Division"]
    },
        
    {
        type:"number",
        name:"num1",
        message:chalk.yellow("Enter your first number")
    },
        
    {
        type:"number",
        name:"num2",
        message:chalk.yellow("Enter your second number")
    }
  ]);

  
    if
    (answers.operator=="Addition"){
        console.log(chalk.rgb(0,255,255)(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));  
    }
    else if(answers.operator=="Substraction")
    {
        console.log(chalk.rgb(0,255,255)(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }else if (answers.operator=="Multiplication"){
    console.log(chalk.rgb(0,255,255)(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator=="Division"){
    console.log(chalk.rgb(0,255,255)(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
}
};

// the below do while loop is being used just to get the input from the users if they wish to continue with calculator/operation

async function restartAgain() {
    do{
        await questionAsk();
        var startAgain= await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:chalk.rgb(170, 255, 0)("Do you want to continue the process? Press y or n:"),
        })
} while (startAgain.restart=="Y"|| startAgain.restart=="y" || startAgain.restart=="yes" || startAgain.restart=="YES") 
    
}
restartAgain();




    