# Gateway Layer

## Purpose

The Gateway layer is the unified model execution interface of XYZ Intelligence Orchestrator.

All model providers must be accessed through Gateway.

## Responsibilities

- Normalize model requests
- Manage provider adapters
- Handle provider communication
- Return unified responses
- Attach execution metadata

## Non Responsibilities

Gateway does not:

- decide which model to use
- plan tasks
- evaluate answers
- manage CL policies

Those belong to Router, Planner, Evaluator and Budget modules.
