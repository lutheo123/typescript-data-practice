export async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        const dataJSON = await response.json();
        return dataJSON;
    } catch (e) {}
}