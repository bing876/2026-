# Routing Scoring Algorithm

## Goal

Evaluate candidate model combinations.

## Factors

- Capability match
- Historical success rate
- Cost efficiency
- Latency
- User primary model preference

## Concept

Score = Quality Gain / Cost Increase

The router should avoid unnecessary multi-model execution.

Simple tasks use single models. Complex tasks may create coordinated model groups.
