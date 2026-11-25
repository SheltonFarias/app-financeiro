import { loadConfig } from '../src/config.js';
import { createServer } from '../src/financeiro-service.js';

// A instancia e reutilizada enquanto a Function estiver quente, inclusive o pool PostgreSQL.
const server = createServer(loadConfig());
const [requestHandler] = server.listeners('request');

export default function handler(request, response) {
  return requestHandler(request, response);
}
