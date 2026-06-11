import { fetchData, Transaction } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
import { countPaymentMethod } from "./modules/countPaymentMethod.js";
import { countStatus } from "./modules/countStatus.js";
import { calculateBestDay } from "./modules/calculateBestDay.js";

async function handleData() {
    const data = await fetchData<Transaction[]>("https://api.origamid.dev/json/transacoes.json");
    
    let totalValue: number, paymentMethods: object, statusCount: object, bestDay: string;
    if (data) {
        totalValue = calculateTotal(data);
        paymentMethods = countPaymentMethod(data);
        statusCount = countStatus(data);
        bestDay = calculateBestDay(data);
    }
}

handleData();