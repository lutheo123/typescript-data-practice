import { fetchData, Transaction } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
import { countPaymentMethod } from "./modules/countPaymentMethod.js";

async function handleData() {
    const data = await fetchData<Transaction[]>("https://api.origamid.dev/json/transacoes.json");
    let totalValue: number = 0, paymentMethods: object = {};
    if (data) {
        totalValue = calculateTotal(data);
        paymentMethods = countPaymentMethod(data);
    }
}

handleData();