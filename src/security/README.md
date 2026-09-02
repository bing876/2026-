# Security Layer

Security layer manages credentials, API keys and access policies.

Principles:
- Agents never directly access raw user keys.
- Gateway requests credentials through secure vault.
- Platform API and user API share unified access control.
