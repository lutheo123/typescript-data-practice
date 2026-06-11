import { Transaction } from "./fetchData";

function mapValues (data: Transaction[]) {
    const validValues = data.filter(item => item["Valor (R$)"] !== '-');
    console.log(validValues);
    const values = validValues.map(item => {
        const valueAjusted = item["Valor (R$)"].replaceAll(".", "").replace(",", ".")
        return Number(valueAjusted)
    });
    return values;
}