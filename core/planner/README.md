# Planner Engine

## Purpose

Planner converts user goals into executable task plans.

Responsibilities:

- Understand task objectives
- Split complex requests into subtasks
- Define required capabilities
- Generate execution plans for Router
- Coordinate Agent workflows

Planner does not directly call models. It works with Router and Gateway.

Architecture:

User Intent
↓
Planner
↓
Task Graph
↓
Router
↓
Model Execution

## Principles

- One task can contain multiple subtasks
- Each subtask can require different capabilities
- Cost and complexity must be considered before execution
- Final responsibility remains with Primary Model
