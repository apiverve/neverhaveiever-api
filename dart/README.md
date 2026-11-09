# Never Have I Ever API - Dart/Flutter Client

Never Have I Ever generates random statements for the popular party game. Features 330+ unique prompts with per-API-key tracking to avoid repeats.

[![pub package](https://img.shields.io/pub/v/apiverve_neverhaveiever.svg)](https://pub.dev/packages/apiverve_neverhaveiever)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Never Have I Ever API](https://apiverve.com/marketplace/neverhaveiever?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_neverhaveiever: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_neverhaveiever/apiverve_neverhaveiever.dart';

void main() async {
  final client = NeverhaveieverClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'adult': 
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "statement": "Never have I ever learned to knit or crochet."
  }
}
```

## API Reference

- **API Home:** [Never Have I Ever API](https://apiverve.com/marketplace/neverhaveiever?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/neverhaveiever](https://docs.apiverve.com/ref/neverhaveiever?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
