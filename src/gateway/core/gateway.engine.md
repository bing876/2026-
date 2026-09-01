# Gateway Engine

## Purpose

Unified execution engine between Orchestrator core and model providers.

## Responsibilities

- Receive normalized model requests
- Validate request metadata
- Select provider adapter
- Execute model call
- Normalize response
- Return usage metrics

## Boundary

Gateway does not:

- decide task strategy
- select business workflow
- evaluate final quality

Those belong to Router and Evaluation layers.
