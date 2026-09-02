class UserModelRegistry {
  constructor() {
    this.models = [];
  }

  register(model) {
    this.models.push(model);
  }

  list() {
    return this.models;
  }
}

module.exports = UserModelRegistry;
