export class Planner {
  createTask(request) {
    return {
      task_id: crypto.randomUUID(),
      input: request,
      objective: request.objective || request.message || '',
      status: 'planned'
    };
  }
}
