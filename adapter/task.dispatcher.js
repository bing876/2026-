// Task Dispatcher
// Dispatches Agent OS tasks into XYZ execution pipeline.

class TaskDispatcher {
  constructor(adapter) {
    this.adapter = adapter;
  }

  dispatch(agentContext, task) {
    return this.adapter.execute(agentContext, task);
  }
}

module.exports = TaskDispatcher;
