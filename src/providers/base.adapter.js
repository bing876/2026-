export class BaseModelAdapter {
  constructor(config = {}) {
    this.config = config;
  }

  async chat(request) {
    throw new Error('Provider adapter must implement chat()');
  }
}
