import { opendir, readFile } from 'node:fs/promises';
import { parse } from 'node:path';

export default async function index(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const rawSearch = url.searchParams.get('search') ?? '';
    const search = rawSearch.toLowerCase();

    const data = [];

    const dir = await opendir('data');
    for await (let file of dir) {
        const { name, ext } = parse(file.name);
        if (ext == '.jpg') {
            const descFileName = `data/${name}.json`;
            const fileDescStr = await readFile(descFileName);
            const fileDesc = JSON.parse(fileDescStr);
            const title = fileDesc.title.toLowerCase();
            const desc = (fileDesc.desc ?? '').toLowerCase();
            if (!search || (title.includes(search) ||
                            desc.includes(search)))
                data.push({
                    id: name,
                    title: fileDesc.title,
                    href: `http://${req.headers.host}/${file.name}`
                });
        }
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}
