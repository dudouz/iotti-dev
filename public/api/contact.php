<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Load configuration
// Adjust the path based on where you place config.php relative to this file
// If public/api/contact.php, then config.php should be at ../../config.php
$configPath = __DIR__ . '/../../config.php';

if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error']);
    error_log('Config file not found at: ' . $configPath);
    exit;
}

$config = require $configPath;

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name = trim($data['name']);
$email = trim($data['email']);
$message = trim($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

// Get Resend API key from config
$resendApiKey = $config['resend_api_key'];
$contactEmail = $config['contact_email'];

if (empty($resendApiKey)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error']);
    error_log('RESEND_API_KEY not configured in config.php');
    exit;
}

// Prepare email HTML
$emailHtml = "
<div>
    <h1>iotti.dev - contact form</h1>
    <hr />
    <h2>Message from, {$name}!</h2>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Message:</strong> {$message}</p>
</div>
";

// Prepare Resend API request
$resendData = [
    'from' => 'Iotti.dev <contact@iotti.dev>',
    'to' => [$contactEmail],
    'subject' => "Contact from {$name} - {$email} [iotti.dev]",
    'html' => $emailHtml
];

// Send request to Resend API
$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($resendData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resendApiKey,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Handle cURL errors
if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
    error_log('cURL error: ' . $curlError);
    exit;
}

// Handle Resend API response
if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code($httpCode);
    echo json_encode([
        'error' => 'Failed to send email',
        'details' => json_decode($response, true)
    ]);
    error_log('Resend API error: ' . $response);
}
?>
