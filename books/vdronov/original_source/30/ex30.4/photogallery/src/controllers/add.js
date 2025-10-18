import { rename, writeFile } from 'node:fs/promises';

import formidable from 'formidable';

const form = formidable({ uploadDir: 'data' });

export default async function add(req, res) {
    const fileBaseName = (new Date()).getTime();
    const jpgFileName = `data/${fileBaseName}.jpg`;
    const jsonFileName = `data/${fileBaseName}.json`;

    const [postParams, files] = await form.parse(req);

    await rename(files.photo[0].filepath, jpgFileName);

    const fileDesc = {
        title: postParams.title[0],
        desc: postParams.desc[0]
    };
    const fileDescStr = JSON.stringify(fileDesc);
    await writeFile(jsonFileName, fileDescStr);

    res.statusCode = 201;
    res.end();
}
