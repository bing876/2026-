# Agent Communication Layer

## Purpose

Define communication between AI agents inside XYZ Agent Orchestrator.

## Message Flow

Agent A creates task message -> Agent B executes -> Agent B returns result -> Manager Agent evaluates.

## Message Schema

- message_id
- from_agent
- to_agent
- task_id
- context
- payload
- status

## Principles

- Agents communicate through structured messages.
- Execution state is traceable.
- Results can be evaluated and stored in memory.
