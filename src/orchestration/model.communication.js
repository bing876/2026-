// Model Communication Layer
// Handles structured communication between cooperating models.

export function createModelMessage(source, target, payload) {
  return {
    source,
    target,
    payload,
    timestamp: Date.now()
  };
}
