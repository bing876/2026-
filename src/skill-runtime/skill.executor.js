export class SkillExecutor {
  async execute(skill, input) {
    if (!skill) throw new Error('Skill not found');
    return skill.run(input);
  }
}
