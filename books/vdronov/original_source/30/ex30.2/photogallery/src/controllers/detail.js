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

    const data = {
        id,
        title: fD.title,
        desc: fD.desc ?? '',
        href: `http://${req.headers.host}/${id}.jpg`
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}
