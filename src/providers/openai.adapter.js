// OpenAI provider adapter placeholder
// Phase 1.2 implementation target: unified chat interface

export class OpenAIAdapter {
  constructor(config = {}) {
    this.provider = 'openai';
    this.config = config;
  }

  async chat(request) {
    return {
      provider: this.provider,
      status: 'not_configured',
      message: 'OpenAI adapter interface ready. API implementation pending.'
    };
  }
}
