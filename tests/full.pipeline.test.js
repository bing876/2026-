// Full pipeline verification

export const pipelineStages = [
  'user_request',
  'task_analysis',
  'model_selection',
  'smart_orchestration',
  'provider_execution',
  'token_accounting',
  'cl_billing',
  'evaluation',
  'memory_update'
];

export function validatePipeline(stages) {
  return pipelineStages.every(stage => stages.includes(stage));
}
