export async function getGallery() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=40"
    );
    return res.json();
}