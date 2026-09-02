export function decomposeTask(task) {
  return {
    task,
    roles: ['primary_reasoning', 'research', 'review'],
    status: 'planned'
  };
}
