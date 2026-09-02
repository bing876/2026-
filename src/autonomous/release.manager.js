export class ReleaseManager {
  prepare(change) {
    return { change, status: 'awaiting_validation' };
  }
}
