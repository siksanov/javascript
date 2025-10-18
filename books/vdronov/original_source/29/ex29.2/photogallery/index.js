import { createServer } from 'node:http';

const port = 8000;

const server = createServer();

server.on('request', (req, res) => {
    const s =  '<!doctype html>' +
               '<html lang="ru">' +
               '  <head>' +
               '    <meta charset="UTF-8">' +
               '        <meta name="viewport" ' +
                             'content="width=device-width, ' +
                                      'initial-scale=1.0">' +
               '    <title>Приветствие</title>' +
               '  </head>' +
               '  <body>' +
               '    <h1>Привет, мир!</h1>' +
               '  </body>' +
               '</html>';
    res.end(s);
});

server.listen(port);
