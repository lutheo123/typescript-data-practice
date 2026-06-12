export function showPaymentMethods(paymentMethods) {
    const paymentDiv = document.getElementById('payment-method');
    if (paymentDiv && paymentDiv instanceof HTMLDivElement) {
        paymentDiv.innerHTML = `
            <p>Cartão de Crédito: ${paymentMethods.creditCard}</p>
            <p>Boleto: ${paymentMethods.ticket}</p>
        `;
    }
}
