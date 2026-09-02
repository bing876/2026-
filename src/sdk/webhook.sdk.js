export function createWebhookEvent(payload) {
  return {
    type: 'XYZ_EVENT',
    timestamp: Date.now(),
    payload
  };
}
