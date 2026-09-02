export class CodeReviewEngine {
  review(change) {
    return { change, status: 'pending_review' };
  }
}
