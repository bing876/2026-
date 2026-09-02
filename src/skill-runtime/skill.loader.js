export class SkillLoader {
  constructor(registry = {}) {
    this.registry = registry;
  }

  load(skillId) {
    return this.registry[skillId] || null;
  }
}
