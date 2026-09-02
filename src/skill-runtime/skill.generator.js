export class SkillGenerator {
  generate(executionHistory) {
    return {
      source: 'memory',
      historySize: executionHistory.length,
      status: 'candidate'
    };
  }
}
