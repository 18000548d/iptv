<?php
function fetchM3U8() {
    $url = 'https://inews-api.tvb.com/news/checkout/live/hd/ott_C_h264?profile=safari'; // Your JSON URL
    
    $response = file_get_contents($url);
    
    if ($response === FALSE) {
        die('Error occurred while fetching data.');
    }
    
    $data = json_decode($response, true);
    
    if (isset($data['content']['url']['hd'])) {
        $m3u8Url = $data['content']['url']['hd']; // Get HD URL
        echo $m3u8Url; // Display the M3U8 URL
    } else {
        echo 'M3U8 URL not found.';
    }
}

fetchM3U8();
?>
