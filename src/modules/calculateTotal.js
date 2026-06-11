function mapValores(data) {
    const validValues = data.filter(item => item["Valor (R$)"] !== '-');
    console.log(validValues);
    const values = validValues.map(item => {
        const valueAjusted = item["Valor (R$)"].replaceAll(".", "").replace(",", ".");
        return Number(valueAjusted);
    });
}
export {};
