export class RoutingMemory {
  constructor(){ this.patterns=[]; }
  record(pattern){ this.patterns.push(pattern); }
  query(){ return this.patterns; }
}
