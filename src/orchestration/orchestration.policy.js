// Orchestration Policy Engine
// Determines when to use single-model or multi-model execution.

export class OrchestrationPolicy {
  decide(task) {
    const complexity = task.complexity || 'normal';

    if (complexity === 'simple') {
      return {
        mode: 'single_model',
        assistants: []
      };
    }

    return {
      mode: 'multi_model',
      assistants: ['reasoning', 'research', 'review']
    };
  }
}
