# XYZ Intelligence Orchestrator - Context Engine Design

## Purpose

Context Engine manages what information each model receives during execution.

Core principle:

Do not send all user history to every model. Provide only the minimum required context.

## Responsibilities

- Context selection
- Context compression
- Memory retrieval
- Privacy isolation
- Token optimization

## Architecture

User Memory
+
Project Memory
+
Task Context
+
Execution State

=

Dynamic Context Package

## Rules

Primary Model receives full conversation context when required.

Auxiliary Models receive only task-specific information.

## Future Evolution

Context optimization will be improved through execution data and AI evaluation.