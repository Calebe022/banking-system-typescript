export type TransactionType = "deposit" | "withdraw";

export type Transaction = {
    type: TransactionType;
    amount: number;
    date: string;
}