<?php

$url = 'https://accounts.spotify.com/api/token';
$data = array('grant_type' => 'client_credentials');

// creates the header and supplies the data required for the post request
$options = array(
    'http' => array(
        'header'  => 
        	"Content-Type: application/x-www-form-urlencoded\r\n".
        	"Authorization: Basic <base64 string normally goes here>\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

// performs a POST request to the Spotify Web API so that we can can refresh our access token
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) { /* Handle error */ }

// delivers the returned JSON back to our ajax call in main.js
echo($result);

?>