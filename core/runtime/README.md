# Runtime Engine

## Purpose

Runtime Engine is responsible for executing planned tasks inside XYZ Intelligence Orchestrator.

Responsibilities:

- Start execution workflows
- Manage task lifecycle
- Coordinate parallel model execution
- Handle failures and recovery
- Maintain execution state

Runtime does not decide which model to use. That responsibility belongs to Router.

Flow:

User Task -> Planner -> Router -> Budget -> Runtime -> Gateway -> Evaluation
