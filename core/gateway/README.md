# Model Gateway

## Purpose

The Model Gateway is the unified model access layer of XYZ Intelligence Orchestrator.

Responsibilities:

- Normalize different LLM provider APIs
- Manage provider adapters
- Expose one internal model interface
- Record execution metadata

## Design Principle

Business modules must never directly call external model APIs.

Flow:

User / Agent

↓

Orchestrator

↓

Model Gateway

↓

Provider Adapter

↓

LLM Provider

## Future Modules

- providers/
- adapters/
- auth/
- usage/
- streaming/
