import { fetchData, Transaction } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
import { countPaymentMethod, TransactionPayment } from "./modules/countPaymentMethod.js";
import { countStatus, TransactionStatus } from "./modules/countStatus.js";
import { calculateBestDay } from "./modules/calculateBestDay.js";
import { showPaymentMethods, showStatusAndDay, showTotal } from "./modules/showStatistics.js";
import { showData } from "./modules/showData.js";

async function handleData() {
    const data = await fetchData<Transaction[]>("https://api.origamid.dev/json/transacoes.json");
    
    let totalValue: number, paymentMethods: TransactionPayment, statusCount: TransactionStatus, bestDay: string;
    if (data) {
        totalValue = calculateTotal(data);
        paymentMethods = countPaymentMethod(data);
        statusCount = countStatus(data);
        bestDay = calculateBestDay(data);

        showTotal(totalValue);
        showPaymentMethods(paymentMethods);
        showStatusAndDay(statusCount, bestDay);
        showData(data);
    }
}

handleData();