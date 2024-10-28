<?php
// Allow cross-origin requests if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get the JSON input
$jsonData = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($jsonData, true);

// Check if the data is received properly
if (isset($data['email']) && isset($data['name']) && isset($data['message'])) {
    $email = $data['email'];
    $name = $data['name'];
    $message = $data['message'];

    $messagecomplete = $name . " said: " . $message;
    mail("placide@not-placide.com", $mail, $message);

    echo json_encode(['status' => 'success']);
} else {
    json_encode(['status' => 'Faled']);
}
