import * as readline from "readline";
import { deposit, withdraw, showStatement } from "./account";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu(): void {
  console.log("🏦 Sistema Bancário");
  console.log("1 - Depositar");
  console.log("2 - Sacar");
  console.log("3 - Ver extrato");
  console.log("4 - Sair");
}

function handleOption(option: string): void {
  switch (option) {
    case "1":
      rl.question("Valor do depósito: ", (value) => {
        deposit(Number(value));
        start();
      });
      break;

    case "2":
      rl.question("Valor do saque: ", (value) => {
        withdraw(Number(value));
        start();
      });
      break;

    case "3":
      showStatement();
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

function start(): void {
  showMenu();
  rl.question("Escolha uma opção: ", handleOption);
}

start();
