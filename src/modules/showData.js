export function showData(data) {
    const dataDiv = document.getElementById("data");
    if (dataDiv && dataDiv instanceof HTMLDivElement) {
        for (let i = 0; i < data.length; i++) {
            let backColor = 'white';
            if (i % 2 == 0)
                backColor = '#dddddd';
            dataDiv.innerHTML += `
                <p id="nome">${data[i].Nome}</p>
                <p id="email">${data[i].Email}</p>
                <p id="compra">R$ ${data[i]["Valor (R$)"]}</p>
                <p id="pagamento">${data[i]["Forma de Pagamento"]}</p>
                <p id="status">${data[i].Status}</p>
            `;
        }
    }
}
