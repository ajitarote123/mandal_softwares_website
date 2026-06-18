<?php
declare(strict_types=1);

/**
 * Strict CORS for Mandal Softwares API endpoints.
 */

const ALLOWED_ORIGINS = [
    'https://company.mandal.one',
    'http://company.mandal.one',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

function cors_handle_preflight(): void
{
  if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    cors_apply_headers();
    http_response_code(204);
    exit;
  }
}

function cors_apply_headers(): void
{
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

  if ($origin !== '' && in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
  }

  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Max-Age: 86400');
}

function cors_require_allowed_origin(): void
{
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

  if ($origin === '') {
  return;
  }

  if (!in_array($origin, ALLOWED_ORIGINS, true)) {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'message' => 'Origin not allowed.']);
    exit;
  }
}

function json_response(array $payload, int $status = 200): void
{
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($payload);
  exit;
}
