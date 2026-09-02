class ModelPreference {
  constructor() {
    this.primaryModel = null;
    this.assistModels = [];
  }

  setPrimary(modelId) {
    this.primaryModel = modelId;
  }

  addAssistant(modelId) {
    this.assistModels.push(modelId);
  }
}

module.exports = ModelPreference;
