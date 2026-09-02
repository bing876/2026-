import { createExecution } from './src/runtime/execution.engine.js';

const task = {
  user_id: 'demo-user',
  prompt: '帮我制定一个电商运营方案',
  mode: 'smart-orchestration'
};

const result = await createExecution(task);

console.log(JSON.stringify(result, null, 2));
