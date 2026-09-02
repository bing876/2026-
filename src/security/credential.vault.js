class CredentialVault {
  constructor() {
    this.credentials = new Map();
  }

  store(ownerId, provider, credential) {
    this.credentials.set(`${ownerId}:${provider}`, credential);
  }

  get(ownerId, provider) {
    return this.credentials.get(`${ownerId}:${provider}`);
  }
}

module.exports = CredentialVault;
