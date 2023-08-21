import inquirer from "inquirer";
import chalk from "chalk";

let myList : string[] = [];
let loop = true;

while(loop){
let todos : {
    todo: string,
    addmore: boolean
} = await inquirer.prompt([
    {
    name: "todo",
    type: "input",
    message: "Enter the todo you wanna add!!"
},
{
    name: "addmore",
    type: "confirm",
    message: "Wanna add more???",
    default: false
}
]);


const {todo, addmore} = todos;
if (todo){
    myList.push(todo);
    
}
loop = addmore;
}

console.log(chalk.red(chalk.bgCyanBright(`Your Todo List is ${myList}`)));


