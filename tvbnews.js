async function fetchM3U8() {
    try {
        const response = await fetch('https://inews-api.tvb.com/news/checkout/live/hd/ott_C_h264?profile=safari'); // Replace with your JSON URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        //const m3u8Url = data.m3u8; // Adjust this based on your JSON structure
        
        console.log(data); // This will contain the M3U8 URL
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchM3U8();
