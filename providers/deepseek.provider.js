export class DeepSeekProvider {
  constructor(config = {}) {
    this.name = 'deepseek';
    this.config = config;
  }

  async chat(request) {
    return {
      provider: this.name,
      model: request.model || 'deepseek-default',
      status: 'READY',
      message: 'DeepSeek provider adapter initialized'
    };
  }
}
