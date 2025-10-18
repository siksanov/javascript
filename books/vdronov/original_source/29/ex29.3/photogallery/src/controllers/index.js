import { opendir, readFile } from 'node:fs/promises';
import { parse } from 'node:path';

export default async function index(req, res) {
    let s =      '<!doctype html>' +
                 '<html>' +
                 '  <head>' +
                 '    <meta charset="UTF-8">' +
                 '        <meta name="viewport" ' +
                               'content="width=device-width, ' +
                                        'initial-scale=1.0">' +
                 '    <link href="/styles.css" rel="stylesheet">' +
                 '    <title>Главная :: Фотогалерея</title>' +
                 '  </head>' +
                 '  <body>' +
                 '    <h1>Фотогалерея</h1>' +
                 '    <main class="photos">';

    const dir = await opendir('data');
    for await (let file of dir) {
        const { name, ext } = parse(file.name);
        if (ext == '.jpg') {
            const descFileName = `data/${name}.json`;
            const fileDescStr = await readFile(descFileName);
            const fileDesc = JSON.parse(fileDescStr);

            s += '      <article>' +
                 `        <a href="/${name}">` +
                 `          <h2>${fileDesc.title}</h2>` +
                 `          <img src="/${file.name}">` +
                 '        </a>' +
                 '      </article>';
        }
    }
    s +=         '    </main>' +
                 '  </body>' +
                 '</html>';
    res.end(s);
}
