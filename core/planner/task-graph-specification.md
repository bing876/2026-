# Task Graph Specification

A task graph represents relationships between subtasks.

Example:

Main Task
|
|-- Research
|-- Reasoning
|-- Generation
|-- Review

Each node contains:

- task_id
- objective
- required_capabilities
- priority
- dependencies
- budget_limit
- execution_status

Task graphs allow parallel execution while preserving final synthesis control.
