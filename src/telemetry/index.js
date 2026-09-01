export class Telemetry {
  constructor() {
    this.events = [];
  }

  record(event) {
    this.events.push({
      timestamp: new Date().toISOString(),
      event
    });
  }

  list() {
    return this.events;
  }
}
