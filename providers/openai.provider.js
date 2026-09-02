export class OpenAIProvider {
  constructor(config = {}) {
    this.name = 'openai';
    this.config = config;
  }

  async chat(request) {
    return {
      provider: this.name,
      model: request.model || 'gpt-default',
      status: 'READY',
      message: 'OpenAI provider adapter initialized'
    };
  }
}
