export class CLWallet {
  constructor(balance = 0) {
    this.balance = balance;
  }

  canConsume(amount) {
    return this.balance >= amount;
  }

  consume(amount) {
    if (!this.canConsume(amount)) throw new Error('Insufficient CL');
    this.balance -= amount;
    return this.balance;
  }

  add(amount) {
    this.balance += amount;
    return this.balance;
  }
}
