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

export function showTotal (totalValue: number) {
    let totalString = String(totalValue);
    if (Number(totalString[totalString.length - 1]) && Number(totalString[totalString.length - 2])) {
        if (Number(totalString[totalString.length - 3])) totalString = totalString + ",00";
    }
    else totalString = totalString + "0";

    totalString = totalString.replace(".", ",");
    const placeDecimal = totalString.indexOf(",")
    for (let i = placeDecimal-1; i >= 0; i--) {
        if ((i - placeDecimal) % 3 === 0) {
            totalString = `${totalString.slice(0, i)}.${totalString.slice(i)}`
        }
    }

    const totalP = document.getElementById('total');
    if (totalP && totalP instanceof HTMLParagraphElement) {
        totalP.innerText = `Total: R$ ${totalString}`
    }
}