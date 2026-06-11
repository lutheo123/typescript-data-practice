import { fetchData, Transaction } from "./modules/fetchData.js";

async function handleData() {
    const data = await fetchData<Transaction[]>("https://api.origamid.dev/json/transacoes.json");
}

handleData();