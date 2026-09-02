class ModelRegistry {
  constructor(){
    this.models = [];
  }

  register(model){
    this.models.push(model);
  }

  getModel(id){
    return this.models.find(m => m.id === id);
  }
}

module.exports = ModelRegistry;
