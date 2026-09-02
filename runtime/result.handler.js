// Result Handler Foundation

export class ResultHandler {
  success(data) {
    return {
      status: 'SUCCESS',
      data
    };
  }

  failure(error) {
    return {
      status: 'FAILED',
      error: error.message || String(error)
    };
  }
}
