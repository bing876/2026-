// DeepSeek provider adapter placeholder
// Phase 1.2 implementation target: unified chat interface

export class DeepSeekAdapter {
  constructor(config = {}) {
    this.provider = 'deepseek';
    this.config = config;
  }

  async chat(request) {
    return {
      provider: this.provider,
      status: 'not_configured',
      message: 'DeepSeek adapter interface ready. API implementation pending.'
    };
  }
}
