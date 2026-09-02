// Agent Runtime Adapter
// Bridge between Agent OS and XYZ Orchestrator.

class AgentRuntimeAdapter {
  constructor(orchestrator) {
    this.orchestrator = orchestrator;
  }

  async execute(agentContext, task) {
    return this.orchestrator.execute({
      agent_id: agentContext.agent_id,
      project_id: agentContext.project_id,
      user_id: agentContext.user_id,
      task
    });
  }
}

module.exports = AgentRuntimeAdapter;
