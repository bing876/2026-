# XYZ Intelligence Orchestrator - Router Engine

## Purpose

Router Engine is responsible for selecting execution strategies based on user tasks, required capabilities, available models, cost budget and quality requirements.

## Design Principle

The router does not select models by brand name. It selects models by capability.

Example:

Task: Build product strategy

Required capabilities:
- reasoning
- research
- writing
- evaluation

Possible model combination:
- Primary Model: final responsibility
- Research Model: information gathering
- Review Model: quality checking

## Current Stage

v0.1 uses rule-based routing.

Future versions will introduce:
- data-driven optimization
- AI-assisted routing improvement
- autonomous router evolution
