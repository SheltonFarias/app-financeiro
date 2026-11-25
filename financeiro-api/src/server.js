import { createServer } from './financeiro-service.js';

// Entrypoint para o runtime Node da Vercel. O serviço continua reutilizável
// pelo adaptador de rotas e pelo servidor local.
export default createServer();
