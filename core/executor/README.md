# Agent Executor

## Purpose

Agent Executor is the execution layer of XYZ Agent Orchestrator.

Responsibilities:

- Receive tasks assigned by Agent Manager
- Load Agent capability and model configuration
- Execute through Model Router
- Return structured execution results

Flow:

User Task
→ Task Planner
→ Agent Manager
→ Agent Executor
→ Model Router
→ Provider
→ Evaluation
→ Memory
