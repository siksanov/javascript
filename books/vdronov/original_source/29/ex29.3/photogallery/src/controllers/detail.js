import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

import error from './error.js';

export default async function detail(id, req, res) {
    const jpgFilePath = `data/${id}.jpg`;

    if (!existsSync(jpgFilePath)) {
        error('Изображение не найдено', 404, req, res);
        return;
    }

    const descFilePath = `data/${id}.json`;
    const fileDescStr = await readFile(descFilePath);
    const fD = JSON.parse(fileDescStr);

    let s =      '<!doctype html>' +
                 '<html>' +
                 '  <head>' +
                 '    <meta charset="UTF-8">' +
                 '        <meta name="viewport" ' +
                               'content="width=device-width, ' +
                                        'initial-scale=1.0">' +
                 '    <link href="/styles.css" rel="stylesheet">' +
                 `    <title>${fD.title} :: Фотогалерея</title>` +
                 '  </head>' +
                 '  <body>' +
                 '    <h1>Фотогалерея</h1>' +
                 `    <h2>${fD.title}</h2>` +
                 '    <section class="photo">' +
                 `      <img src="/${id}.jpg">` +
                 '    </section>';
    if (fD.desc)
        s +=     `    <div>${fD.desc}</div>`;
    s +=         '  </body>' +
                 '</html>';
    res.end(s);
}
