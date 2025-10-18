import { existsSync, createReadStream } from 'node:fs';

export default function staticFile(fileName, req, res) {
    const filePath = `static/${fileName}`;
    if (existsSync(filePath)) {
        const stream = createReadStream(filePath);
        stream.pipe(res);
    } else {
        const filePath = `data/${fileName}`;
        if (existsSync(filePath)) {
            const stream = createReadStream(filePath);
            stream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
}
