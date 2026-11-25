import test from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig } from '../src/config.js';

test('carrega configurações com valores seguros', () => {
  const config = loadConfig({
    PORT: '4010',
    CORS_ORIGINS: 'https://web.exemplo.com, https://app.exemplo.com ',
  });

  assert.equal(config.port, 4010);
  assert.equal(config.corsOrigins.has('https://app.exemplo.com'), true);
});

test('aceita valores com aspas externas de provedores de ambiente', () => {
  const config = loadConfig({
    DATABASE_URL: '"postgresql://usuario:senha@db.exemplo.com:5432/postgres"',
    CORS_ORIGINS: '"https://web.exemplo.com"',
    AUTH_USER: '"admin"',
    JWT_SECRET: '"segredo"',
  });

  assert.equal(config.databaseUrl, 'postgresql://usuario:senha@db.exemplo.com:5432/postgres');
  assert.equal(config.corsOrigins.has('https://web.exemplo.com'), true);
  assert.equal(config.auth.username, 'admin');
  assert.equal(config.auth.jwtSecret, 'segredo');
});
