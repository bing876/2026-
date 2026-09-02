class BaseProvider {
  constructor(config = {}) {
    this.config = config;
  }

  async chat(request) {
    throw new Error('Provider chat() must be implemented');
  }
}

module.exports = BaseProvider;
