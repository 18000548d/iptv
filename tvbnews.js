addEventListener('fetch', event => {
    event.respondWith(fetchM3U8());
});

async function fetchM3U8() {
    const url = 'https://inews-api.tvb.com/news/checkout/live/hd/ott_C_h264?profile=safari';

    try {
        const response = await fetch(url);
        
        // Check if the response is okay
        if (!response.ok) {
            return new Response('Error fetching data', { status: response.status });
        }

        const data = await response.json();
        
        // Access the HD M3U8 URL
        const m3u8Url = data.content.url.hd;
        
        return new Response(JSON.stringify({ m3u8Url }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
        
    } catch (error) {
        return new Response('Error occurred: ' + error.message, { status: 500 });
    }
}
