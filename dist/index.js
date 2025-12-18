"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const account_1 = require("./account");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    console.log("🏦 Sistema Bancário");
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Ver extrato");
    console.log("4 - Sair");
}
function handleOption(option) {
    switch (option) {
        case "1":
            rl.question("Valor do depósito: ", (value) => {
                (0, account_1.deposit)(Number(value));
                start();
            });
            break;
        case "2":
            rl.question("Valor do saque: ", (value) => {
                (0, account_1.withdraw)(Number(value));
                start();
            });
            break;
        case "3":
            (0, account_1.showStatement)();
            start();
            break;
        case "4":
            console.log("Saindo do sistema...");
            rl.close();
            break;
        default:
            console.log("Opção inválida.");
            start();
    }
}
function start() {
    showMenu();
    rl.question("Escolha uma opção: ", handleOption);
}
start();
