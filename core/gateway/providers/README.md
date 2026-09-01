# Provider Adapter Layer

External model providers are isolated here.

Examples:

- OpenAI
- Anthropic
- Google Gemini
- DeepSeek
- Moonshot Kimi
- User supplied API providers

Each provider must implement the same internal interface.

Future adapters should be added without modifying Router logic.
