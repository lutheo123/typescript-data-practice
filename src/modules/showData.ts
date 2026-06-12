import { Transaction } from "./fetchData";

export function showData (data: Transaction[]): void {
    const dataDiv = document.getElementById("data");
    if (dataDiv && dataDiv instanceof HTMLDivElement) {
        for (let i = 0; i < data.length; i++) {
            let backColor = 'white';
            if (i % 2 === 0) backColor = '#ffd4b0'
            dataDiv.innerHTML += `
                <p id="nome" style="background-color: ${backColor}">${data[i].Nome}</p>
                <p id="email" style="background-color: ${backColor}">${data[i].Email}</p>
                <p id="compra" style="background-color: ${backColor}">R$ ${data[i]["Valor (R$)"]}</p>
                <p id="pagamento" style="background-color: ${backColor}">${data[i]["Forma de Pagamento"]}</p>
                <p id="status" style="background-color: ${backColor}">${data[i].Status}</p>
            `
        }
    }
}