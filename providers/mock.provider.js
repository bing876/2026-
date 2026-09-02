const BaseProvider = require('./base.provider');

class MockProvider extends BaseProvider {
  async chat(request) {
    return {
      provider: 'mock',
      model: request.model || 'mock-model',
      content: 'Mock response for orchestration testing.'
    };
  }
}

module.exports = MockProvider;
