import { fetchData } from "./modules/fetchData";
async function handleData() {
    const data = fetchData("https://api.origamid.dev/json/transacoes.json");
}
