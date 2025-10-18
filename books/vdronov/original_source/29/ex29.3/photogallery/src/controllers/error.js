export default function error(message, statusCode, req, res) {
    res.statusCode = statusCode;
    const s =    '<!doctype html>' +
                 '<html>' +
                 '  <head>' +
                 '    <meta charset="UTF-8">' +
                 '        <meta name="viewport" ' +
                               'content="width=device-width, ' +
                                        'initial-scale=1.0">' +
                 '    <link href="/styles.css" rel="stylesheet">' +
                 '    <title>Ошибка :: Фотогалерея</title>' +
                 '  </head>' +
                 '  <body>' +
                 '    <h1>Фотогалерея</h1>' +
                 '    <h2>Ошибка</h2>' +
                 `    <p>${message}</h2>` +
                 '  </body>' +
                 '</html>';
    res.end(s);
}
