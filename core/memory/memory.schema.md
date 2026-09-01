# Memory Engine Schema

## Execution Memory

Stores:

- task_id
- task_type
- requested_capabilities
- selected_models
- execution_plan
- token_cost
- cl_cost
- result_score
- user_feedback

## Model Performance Memory

Tracks:

- model capability scores
- success rate
- latency
- cost efficiency

## Routing Memory

Stores:

- task pattern
- recommended model combination
- historical performance

## Principle

Memory improves future routing decisions but does not directly override safety and budget policies.
