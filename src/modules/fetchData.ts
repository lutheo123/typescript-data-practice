type FormaPagamento = "Cartão de Crédito" | "Boleto";
type Status = "Paga" | "Aguardando Pagamento" | "Recusada pela operadora de cartão" | "Estornada";
type ClienteNovo = 0 | 1

export interface Transaction {
    ["Cliente Novo"]: ClienteNovo;
    Data: string;
    Email: string;
    ["Forma de Pagamento"]: FormaPagamento;
    ID: number;
    Nome: string;
    Status: Status;
    ["Valor (R$)"]: string;
}

export async function fetchData<T>(url: string): Promise<T | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error" + response.status);

        const dataJSON = await response.json();
        return dataJSON;
    } catch (e) {
        return null;
    }
}