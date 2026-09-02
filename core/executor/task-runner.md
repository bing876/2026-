# Task Runner

## Role

Task Runner manages execution lifecycle after an Agent receives a task.

Lifecycle:

PENDING
→ RUNNING
→ REVIEWING
→ COMPLETED
→ FAILED

Execution record:

- task_id
- agent_id
- model_used
- execution_trace
- evaluation_result
