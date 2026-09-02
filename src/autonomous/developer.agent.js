export class DeveloperAgent {
  analyze(issue) {
    return { issue, action: 'analyze_and_propose' };
  }
}
