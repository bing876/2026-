const providers = new Map();

export function registerProvider(name, provider) {
  providers.set(name, provider);
}

export function getProvider(name) {
  return providers.get(name);
}

export function listProviders() {
  return [...providers.keys()];
}
