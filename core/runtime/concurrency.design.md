# Concurrency Design

Runtime supports:

- Sequential execution
- Parallel sub-task execution
- Dependency based execution

Example:

Research Agent + Analysis Agent can execute in parallel.

Final synthesis waits for all required outputs.

Concurrency must always respect Budget Controller limits.
