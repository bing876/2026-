export class AgentSDK {
  constructor(runtime) {
    this.runtime = runtime;
  }

  async run(agent, input) {
    return this.runtime.execute({ agent, input });
  }
}
