#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.italic.bold("\n \tWelcome to 'Hiba M.Dawood' - Currency-converter\n"));
//Define the list of currencies and thier exchange rate
let exchange_rate = {
    USD: 1, //Base currency
    YEN: 113, //Japanees currency (yen)
    EUR: 0.9, //European currency(Euro)
    CAD: 1.3, //Canadian Dollar
    AUD: 1.65, //Australian Dollar
    PKR: 277.42, //Pakistan Rupees
};
//propmt the user to select currencies from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_cuurency",
        type: "list",
        message: chalk.magenta("Select the currency to convert from:"),
        choices: ["USD", "YEN", "EUR", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magenta("Select the currency to convert into:"),
        choices: ["USD", "YEN", "EUR", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.magenta("Enter the amount to convert:"),
    },
]);
//perform currency conversation by using formula
let from_amount = exchange_rate[user_answer.from_cuurency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversation
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Disply the converted
console.log(`Conveted amount = ${chalk.green(converted_amount.toFixed(2))}`);
