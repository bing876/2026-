// Execution Trace Standard

export class ExecutionTrace {
  constructor(id) {
    this.executionId = id;
    this.events = [];
  }

  record(stage, payload = {}) {
    this.events.push({
      stage,
      timestamp: new Date().toISOString(),
      payload
    });
  }

  getTrace() {
    return this.events;
  }
}
