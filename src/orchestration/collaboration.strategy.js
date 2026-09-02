// Collaboration Strategy
// Defines how multiple models cooperate.

export function buildCollaborationStrategy(task, models = []) {
  return {
    task,
    roles: models.map((model, index) => ({
      model,
      role: index === 0 ? 'primary' : 'assistant'
    }))
  };
}
