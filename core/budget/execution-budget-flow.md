# Execution Budget Flow

```
Task Input
    ↓
Complexity Estimate
    ↓
Budget Check
    ↓
Model Call Permission
    ↓
Execution
    ↓
Cost Record
```

## Rules

Simple tasks should prefer single model execution.

Complex tasks may enable multi-model execution when expected quality gain justifies cost.

All decisions must be recorded in execution trace.
