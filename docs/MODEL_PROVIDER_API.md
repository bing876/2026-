# XYZ Intelligence Orchestrator - Model Provider API

## Goal

Provide a unified interface for all AI model providers.

## Supported Sources

- Platform managed models
- User API models
- Local models

## Provider Adapter

Every model exposes:

- Model identity
- Capability tags
- Context limits
- Cost information
- Performance metrics

## Design Principle

Business logic never directly calls providers.

All requests go through Model Gateway.