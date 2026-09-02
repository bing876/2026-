export class CLPricingEngine {
  calculate(task) {
    if (task.complexity === 'simple') return 0;
    if (task.complexity === 'medium') return 10;
    return 30;
  }
}
