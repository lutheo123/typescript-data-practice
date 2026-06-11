export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Error" + response.status);
        const dataJSON = await response.json();
        return dataJSON;
    }
    catch (e) {
        return null;
    }
}
