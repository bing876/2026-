// Strategy Optimizer
// Evaluates routing strategies using quality, cost and history.

export class StrategyOptimizer {
  optimize(strategies) {
    return strategies.sort((a,b)=>b.score-a.score)[0];
  }
}
