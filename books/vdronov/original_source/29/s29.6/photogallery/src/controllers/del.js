import { rm } from 'node:fs/promises';

export default async function del(id, req, res) {
    const jpgFilePath = `data/${id}.jpg`;
    const descFilePath = `data/${id}.json`;

    await rm(jpgFilePath);
    await rm(descFilePath);

    res.setHeader('Location', '/');
    res.statusCode = 302;
    res.end();
}
