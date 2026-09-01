// XYZ Intelligence Orchestrator v0.1
// Minimal execution pipeline prototype

import { Planner } from './planner/index.js';
import { Router } from './router/index.js';
import { Gateway } from './gateway/index.js';
import { Telemetry } from './telemetry/index.js';

export class Orchestrator {
  constructor(config = {}) {
    this.planner = new Planner();
    this.router = new Router();
    this.gateway = new Gateway(config.providers || {});
    this.telemetry = new Telemetry();
  }

  async execute(request) {
    const task = this.planner.createTask(request);
    const plan = this.router.createPlan(task);
    const result = await this.gateway.execute(plan);

    this.telemetry.record({
      task,
      plan,
      result
    });

    return result;
  }
}
