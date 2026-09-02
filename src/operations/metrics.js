// Metrics foundation
export function recordMetric(name, value) {
  return {
    name,
    value,
    timestamp: Date.now(),
  };
}
