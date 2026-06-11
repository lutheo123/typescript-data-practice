import { fetchData } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
import { countPaymentMethod } from "./modules/countPaymentMethod.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    let totalValue = 0, paymentMethods = {};
    if (data) {
        totalValue = calculateTotal(data);
        paymentMethods = countPaymentMethod(data);
    }
}
handleData();
