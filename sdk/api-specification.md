# SDK API Specification

## Task Creation

External applications submit tasks through a unified interface.

Required fields:
- user_id
- task
- primary_model(optional)
- execution_mode
- budget_limit

## Response

Returns:
- execution_id
- status
- selected models
- cost information
- final result

SDK must never expose internal routing complexity to end users.
