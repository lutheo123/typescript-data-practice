import { fetchData, Transacao } from "./modules/fetchData.js";

async function handleData() {
    const data = await fetchData<Transacao>("https://api.origamid.dev/json/transacoes.json");
}