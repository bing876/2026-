// XYZ Intelligence Orchestrator Model Registry v0.1

const models = {
  default: {
    id: 'default-model',
    capabilities: ['general'],
    enabled: true
  }
};

export function registerModel(model) {
  models[model.id] = model;
}

export function getModel(id) {
  return models[id];
}

export function listModels() {
  return Object.values(models);
}
