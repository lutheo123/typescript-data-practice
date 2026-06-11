import { Transaction } from "./fetchData";

export function countStatus(data: Transaction[]): {
    paid: number,
    refused: number,
    waiting: number,
    reversed: number,
} {
    let paid = 0, refused = 0, waiting = 0, reversed = 0;
    return {
        paid: paid,
        refused: refused,
        waiting: waiting,
        reversed: reversed,
    }
}