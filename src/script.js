import { fetchData } from "./modules/fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    const alfred = data?.filter(item => item.Status == "Estornada");
    console.log(alfred);
}
handleData();
