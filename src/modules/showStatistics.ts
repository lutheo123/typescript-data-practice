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

export function showStatusAndDay (statusCount: TransactionStatus, bestDay: string): void {
    const statusDiv = document.getElementById('status-day');
    if (statusDiv && statusDiv instanceof HTMLDivElement) {
        statusDiv.innerHTML = `
            <p>Paga: ${statusCount.paid}</p>
            <p>Recusada pela operadora de cartão: ${statusCount.refused}</p>
            <p>Aguardando pagamento: ${statusCount.waiting}</p>
            <p>Estornada: ${statusCount.reversed}</p>
            <p>Dia com mais vendas: ${bestDay}</p>
        `
    }
}