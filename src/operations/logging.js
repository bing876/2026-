// Logging foundation
export function createLog(event) {
  return {
    timestamp: Date.now(),
    event,
  };
}
