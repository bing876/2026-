// Cost Optimizer
// Controls model collaboration cost.

export class CostOptimizer {
  optimize(plan, budget) {
    if (budget <= 0) {
      return {
        mode: 'primary_only'
      };
    }

    return plan;
  }
}
