export function stringToDate(date) {
    const [dmy, time] = date.split(' ');
    const [day, month, year] = dmy.split('/').map(val => Number(val));
    const [hours, minutes] = time.split(':').map(val => Number(val));
    return new Date(year, month - 1, day, hours, minutes);
}
const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
export function calculateBestDay(data) {
    const dataDays = data.map(item => stringToDate(item.Data).getDay());
    let curDay = -1, count = 0;
    for (let i = 0; i < dataDays.length; i++) {
        if (dataDays[i] !== curDay)
            count--;
        else
            count++;
        if (count <= 0) {
            curDay = dataDays[i];
            count = 1;
        }
    }
    return curDay;
}
