import { Transaction } from "./types";

let balance: number = 0;
let history: Transaction[] = [];

export function deposit(amount: number): void {
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

export function withdraw(amount: number): void {
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

export function showStatement(): void {
    console.log("\n📄 Extrato:");
    history.forEach((transaction) => {
        const sign = transaction.type === "deposit" ? "+" : "-";
        console.log(
            `${sign} R$${transaction.amount} | ${transaction.date}`
        );
    });

    console.log(`\n💰 Saldo atual: R$${balance}\n`);
}