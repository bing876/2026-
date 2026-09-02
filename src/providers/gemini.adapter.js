// Gemini provider adapter placeholder
// Phase 1.2 implementation target: unified chat interface

export class GeminiAdapter {
  constructor(config = {}) {
    this.provider = 'gemini';
    this.config = config;
  }

  async chat(request) {
    return {
      provider: this.provider,
      status: 'not_configured',
      message: 'Gemini adapter interface ready. API implementation pending.'
    };
  }
}
