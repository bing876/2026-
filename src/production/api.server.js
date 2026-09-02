export class APIServer {
  constructor(runtime) {
    this.runtime = runtime;
  }

  async execute(request) {
    return this.runtime.execute(request);
  }
}
