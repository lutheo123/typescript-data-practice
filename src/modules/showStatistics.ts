import { TransactionPayment } from "./countPaymentMethod";
import { TransactionStatus } from "./countStatus";

export function showPaymentMethods (paymentMethods: TransactionPayment): void {
    const paymentDiv = document.getElementById('payment-method');
    if (paymentDiv && paymentDiv instanceof HTMLDivElement) {
        paymentDiv.innerHTML = `
            <p>Cartão de Crédito: ${paymentMethods.creditCard}</p>
            <p>Boleto: ${paymentMethods.ticket}</p>
        `
    }
}