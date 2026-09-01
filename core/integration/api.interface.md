# API Interface Specification

## Goal

Define stable external communication contracts.

## Core operations

- submit task
- query execution status
- retrieve result
- inspect usage cost
- provide feedback

## Rules

API consumers should not need to understand internal model providers.

The orchestrator handles:

- task planning
- routing
- model selection
- budget control
- evaluation
