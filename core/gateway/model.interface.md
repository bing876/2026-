# Model Interface Specification

## Internal Model Request

```json
{
  "model_id": "gpt",
  "messages": [],
  "capabilities": ["reasoning"],
  "budget": {
    "max_tokens": 4000
  },
  "trace_id": "execution-id"
}
```

## Internal Model Response

```json
{
  "content": "",
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0
  },
  "model": "",
  "latency": 0,
  "trace_id": ""
}
```

## Rules

- Provider differences must be hidden behind adapters.
- Every request must generate execution trace data.
- Token usage must be returned for CL accounting.
