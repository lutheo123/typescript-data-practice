import { Transaction } from "./fetchData";

export function stringToDate(date: string) {
    const [dmy, time] = date.split(' ');

    const [day, month, year] = dmy.split('/').map(val => Number(val));
    const [hours, minutes] = time.split(':').map(val => Number(val));

    return new Date(year, month-1, day, hours, minutes);
}

const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
export function calculateBestDay(data: Transaction[]): string {
    const dataDays = data.map(item => stringToDate(item.Data).getDay());
    let bestDay = 0, maxCount = 0, hashMap = new Map<number, number>();
    for (let i = 0; i < dataDays.length; i++) {
        const count = (hashMap.get(dataDays[i]) || 0) + 1
        hashMap.set(dataDays[i], count);

        if (count > maxCount) {
            maxCount = count;
            bestDay = dataDays[i];
        }
    }
    return weekDays[bestDay];
}