export function countPaymentMethod(data) {
    let creditCard = 0, ticket = 0;
    data.forEach(item => {
        if (item["Forma de Pagamento"] === "Cartão de Crédito")
            creditCard++;
        else if (item["Forma de Pagamento"] === "Boleto")
            ticket++;
    });
    return {
        creditCard: creditCard,
        ticket: ticket,
    };
}
