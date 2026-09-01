# Agent Adapter Specification

## Purpose

Allow AI agents to use XYZ Orchestrator as an intelligence execution layer.

## Agent responsibilities

Agents provide:

- user intent
- task context
- permissions
- execution goals

Orchestrator provides:

- planning
- model routing
- execution coordination
- evaluation

## Design principle

Agent identity and business logic remain separated from model orchestration.
