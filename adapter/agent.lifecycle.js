// Agent Lifecycle Manager
// Handles Agent registration and runtime state.

class AgentLifecycle {
  constructor() {
    this.agents = new Map();
  }

  register(agent) {
    this.agents.set(agent.agent_id, {
      ...agent,
      status: 'ACTIVE'
    });
  }

  get(agentId) {
    return this.agents.get(agentId);
  }
}

module.exports = AgentLifecycle;
