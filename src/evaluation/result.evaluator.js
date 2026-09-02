// Result Evaluation baseline

export function evaluateResult(result) {
  return {
    score: 0,
    status: 'PENDING_REVIEW',
    result
  };
}
