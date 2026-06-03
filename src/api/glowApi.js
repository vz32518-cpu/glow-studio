export async function getGallery() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=40"
    );

    const data = await res.json();
    return data;
}