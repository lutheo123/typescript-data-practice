import { fetchData } from "./modules/fetchData.js";
import { calculateTotal } from "./modules/calculateTotal.js";
import { countPaymentMethod } from "./modules/countPaymentMethod.js";
import { countStatus } from "./modules/countStatus.js";
import { stringToDate } from "./modules/calculateBestDay.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    let totalValue = 0, paymentMethods = {}, statusCount = {};
    if (data) {
        console.log(data);
        data.forEach(element => {
            console.log(stringToDate(element.Data));
            console.log(stringToDate(element.Data).getDay());
        });
        totalValue = calculateTotal(data);
        paymentMethods = countPaymentMethod(data);
        statusCount = countStatus(data);
    }
}
handleData();
