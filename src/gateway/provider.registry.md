# Provider Registry

## Purpose

Maintain available model providers and their capabilities.

## Registry Fields

- provider_id
- model_id
- capabilities
- context_window
- pricing_metadata
- availability
- permission_scope

## Future Usage

Router uses capability information.
Budget uses pricing metadata.
Evaluation updates performance scores.

The registry should allow adding new models without changing core architecture.
