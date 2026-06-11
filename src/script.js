import { fetchData } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        calculateTotal(data);
    }
}
handleData();
