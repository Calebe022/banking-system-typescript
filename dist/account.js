"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deposit = deposit;
exports.withdraw = withdraw;
exports.showStatement = showStatement;
let balance = 0;
let history = [];
function deposit(amount) {
    if (amount <= 0) {
        console.log("Valor inválido para depósito.");
    }
    balance += amount;
    history.push({
        type: "deposit",
        amount,
        date: new Date().toLocaleString()
    });
    console.log('Depósito de R$$[amount} realizado com sucesso.');
}
function withdraw(amount) {
    if (amount <= 0) {
        console.log("Valor inválido para saque.");
        return;
    }
    if (amount > balance) {
        console.log("Saldo insuficiente.");
        return;
    }
    balance -= amount;
    history.push({
        type: "withdraw",
        amount,
        date: new Date().toLocaleString()
    });
    console.log('Saque de R$${amount} realizado com sucesso.');
}
function showStatement() {
    console.log("\n📄 Extrato:");
    history.forEach((transaction) => {
        const sign = transaction.type === "deposit" ? "+" : "-";
        console.log(`${sign} R$${transaction.amount} | ${transaction.date}`);
    });
    console.log(`\n💰 Saldo atual: R$${balance}\n`);
}
