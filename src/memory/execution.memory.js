export class ExecutionMemory {
  constructor(){ this.records=[]; }
  save(record){ this.records.push(record); }
  list(){ return this.records; }
}
