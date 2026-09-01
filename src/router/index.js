export class Router {
  createPlan(task) {
    return {
      task_id: task.task_id,
      primary_model: 'default',
      mode: 'single_model',
      capabilities: ['general'],
      task
    };
  }
}
