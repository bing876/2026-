# XYZ Intelligence Orchestrator MVP Demo Flow

## Input

User task:

帮我制定一个电商运营方案

## Execution Flow

User Request

↓

Planner

任务分类：运营规划

↓

Router

生成策略：

Primary Model: DeepSeek
Assist Model: GPT
Review Model: Kimi

↓

Budget Controller

计算 CL 消耗

↓

Gateway

调用 Provider Adapter

↓

Evaluation

评分结果

↓

Telemetry

保存执行记录
