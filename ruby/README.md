# Never Have I Ever API - Ruby Gem

Never Have I Ever generates random statements for the popular party game. Features 330+ unique prompts with per-API-key tracking to avoid repeats.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_neverhaveiever'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_neverhaveiever
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_neverhaveiever'

# Initialize the client
client = APIVerve::Neverhaveiever::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ adult:  })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ adult:  })
  puts response["data"]
rescue APIVerve::Neverhaveiever::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Neverhaveiever::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Neverhaveiever::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/neverhaveiever?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/neverhaveiever?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/neverhaveiever?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
