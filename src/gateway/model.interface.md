# Model Interface Specification

## Unified Request

Every provider receives a normalized request:

- execution_id
- user_id
- model_id
- messages
- capability_requirements
- token_budget
- metadata

## Unified Response

Every provider returns:

- content
- usage
- latency
- provider_status
- execution_metadata

## Provider Isolation

Each provider is implemented through an adapter.

Examples:

- OpenAI Adapter
- Anthropic Adapter
- Gemini Adapter
- DeepSeek Adapter
- Kimi Adapter
- User API Adapter

Router must never directly call providers.
