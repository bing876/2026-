// Billing record foundation
export class BillingRecord {
  create(record) {
    return {
      id: Date.now().toString(),
      ...record,
      createdAt: new Date().toISOString()
    };
  }
}
