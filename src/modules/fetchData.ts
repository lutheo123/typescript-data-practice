export interface Transacao {
    "Cliente Novo": number;
    Data: string;
    Email: string;
    "Forma de Pagamento": string;
    ID: number;
    Nome: string;
    Status: string;
    "Valor (R$)": string;
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