class ModelPreference {
  constructor(){
    this.primaryModel = null;
    this.assistModels = [];
  }

  setPrimary(model){
    this.primaryModel = model;
  }

  addAssist(model){
    this.assistModels.push(model);
  }
}

module.exports = ModelPreference;
