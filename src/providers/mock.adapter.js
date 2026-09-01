import { BaseModelAdapter } from './base.adapter.js';

export class MockModelAdapter extends BaseModelAdapter {
  async chat(request) {
    return {
      model: request.model || 'mock-model',
      content: 'Prototype response from model adapter.',
      usage: {
        input_tokens: 0,
        output_tokens: 0
      }
    };
  }
}
