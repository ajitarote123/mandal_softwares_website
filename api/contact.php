<?php
declare(strict_types=1);

require_once __DIR__ . '/cors.php';

cors_handle_preflight();
cors_apply_headers();
cors_require_allowed_origin();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
  json_response(['success' => false, 'message' => 'Invalid JSON payload.'], 400);
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$subject = trim((string) ($data['subject'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $subject === '' || $message === '') {
  json_response(['success' => false, 'message' => 'All fields are required.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  json_response(['success' => false, 'message' => 'Please provide a valid email address.'], 400);
}

if (strlen($name) > 120 || strlen($email) > 160 || strlen($subject) > 200 || strlen($message) > 5000) {
  json_response(['success' => false, 'message' => 'One or more fields exceed the maximum length.'], 400);
}

$to = 'mandalsoftwares@gmail.com';
$mailSubject = '[Mandal Softwares Contact] ' . $subject;
$body = "New contact form submission from Mandal Softwares Website\r\n\r\n"
  . "Name: {$name}\r\n"
  . "Email: {$email}\r\n"
  . "Subject: {$subject}\r\n\r\n"
  . "Message:\r\n{$message}\r\n";

$headers = [
  'From: Mandal Softwares Website <noreply@mandal.one>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'X-Mailer: PHP/' . phpversion(),
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
  json_response(['success' => false, 'message' => 'Unable to send message. Please try again later.'], 500);
}

json_response(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
