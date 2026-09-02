class AccessPolicy {
  canUseProvider(user, provider) {
    return {
      allowed: true,
      userId: user.id,
      provider
    };
  }
}

module.exports = AccessPolicy;
