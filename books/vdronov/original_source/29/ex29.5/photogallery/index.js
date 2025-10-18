import router from './src/router.js';

import { createServer } from 'node:http';

const port = 8000;

const server = createServer();

server.on('request', (req, res) => {
    router(req, res);
});

server.listen(port);
