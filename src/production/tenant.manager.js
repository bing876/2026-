export class TenantManager {
  constructor() {
    this.tenants = new Map();
  }

  register(id, config) {
    this.tenants.set(id, config);
  }
}
