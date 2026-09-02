// CL Budget Controller baseline

export function checkBudget(requested, available) {
  return {
    allowed: requested <= available,
    requested,
    available
  };
}
