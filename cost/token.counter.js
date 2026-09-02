// Token usage counter foundation
export class TokenCounter {
  count(inputTokens = 0, outputTokens = 0) {
    return {
      inputTokens,
      outputTokens,
      totalTokens: inputTokens + outputTokens
    };
  }
}
