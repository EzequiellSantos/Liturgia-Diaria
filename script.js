async function getData() {
    try {
        const response = await fetch('https://liturgia-diaria-agpgjee97-ezequiel-santos-projects.vercel.app/');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}