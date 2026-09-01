# Model Registry

## Purpose

Maintain unified metadata for all supported models.

## Model Attributes

- model_id
- provider
- capabilities
- context_window
- cost_profile
- availability
- permission_scope

## Principle

Models are described by capabilities, not fixed roles.

Example:

reasoning: high
writing: medium
coding: high
vision: low
