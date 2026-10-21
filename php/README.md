# Never Have I Ever API - PHP Package

Never Have I Ever generates random statements for the popular party game. Features 330+ unique prompts with per-API-key tracking to avoid repeats.

## Installation

Install via Composer:

```bash
composer require apiverve/neverhaveiever
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Neverhaveiever\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['adult' => ]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Neverhaveiever\Client;
use APIVerve\Neverhaveiever\Exceptions\APIException;
use APIVerve\Neverhaveiever\Exceptions\ValidationException;

try {
    $response = $client->execute(['adult' => ]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "statement": "Never have I ever learned to knit or crochet."
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/neverhaveiever?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/neverhaveiever?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/neverhaveiever?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
