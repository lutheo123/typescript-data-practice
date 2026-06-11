export function stringToDate(date) {
    const [dmy, time] = date.split(' ');
    const [day, month, year] = dmy.split('/').map(val => Number(val));
    const [hours, minutes] = time.split(':').map(val => Number(val));
    return new Date(year, month - 1, day, hours, minutes);
}
