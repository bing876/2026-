export function coordinateAgents(plan) {
  return {
    executionPlan: plan,
    coordination: 'primary-model-managed',
    status: 'ready'
  };
}
