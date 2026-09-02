// Model Benchmark Engine
// Compares model strategies based on quality, cost and latency.

export function benchmarkStrategies(strategies = []) {
  return strategies.map(strategy => ({
    strategy,
    score: 0
  }));
}
