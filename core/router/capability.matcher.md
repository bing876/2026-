# Capability Matcher

## Principle

Models are represented by capability profiles, not fixed roles.

Example capabilities:

- reasoning
- coding
- writing
- research
- vision
- planning
- review
- long_context

## Matching Process

Task requirements are extracted first.

Then the router matches:

Task Capability -> Model Capability Score

The highest value combination is selected under cost constraints.

## Model Independence

A future model replacement should only require updating capability data, not rewriting router logic.
