# Execution Trace Schema

## Execution ID

Every task receives a unique execution_id.

## Trace Lifecycle

```
USER_REQUEST
 -> TASK_ANALYSIS
 -> PLANNING
 -> ROUTING
 -> BUDGET_CHECK
 -> MODEL_EXECUTION
 -> EVALUATION
 -> MEMORY_UPDATE
 -> FINAL_RESPONSE
```

## Recorded Data

- execution_id
- user_id
- task_type
- selected_models
- model_latency
- input_tokens
- output_tokens
- cost
- CL_consumption
- quality_score
- errors
- feedback

## Goal

Provide reliable data for future Router optimization.
