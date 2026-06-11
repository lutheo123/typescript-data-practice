import { Transaction } from "./fetchData";

function mapValues (data: Transaction[]) {
    const validValues = data.filter(item => item["Valor (R$)"] !== '-');
    const values = validValues.map(item => {
        const valueAjusted = item["Valor (R$)"].replaceAll(".", "").replace(",", ".")
        return Number(valueAjusted)
    });
    return values;
}

export function calculateTotal(data: Transaction[]) {
    const values = mapValues(data);
    const totalValue = values.reduce((acc, cur) => acc + cur, 0)
    return totalValue;
}