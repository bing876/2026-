// Task Complexity Analyzer

export class ComplexityAnalyzer {
  analyze(task) {
    const text = task.input || '';

    if (text.length < 100) {
      return 'simple';
    }

    if (text.includes('规划') || text.includes('策略') || text.includes('分析')) {
      return 'complex';
    }

    return 'normal';
  }
}
