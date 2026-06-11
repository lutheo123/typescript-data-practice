export async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error" + response.status);
        const dataJSON = await response.json();
        return dataJSON;
    } catch (e) {}
}