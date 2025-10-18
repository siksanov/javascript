import { URL } from 'node:url';

import index from './controllers/index.js';
import detail from './controllers/detail.js';
import staticFile from './controllers/staticfile.js';
import error from './controllers/error.js';

const reDetail = /^\/([0-9]+)$/;
const reStatic = /^\/([-_0-9a-z]+\.[a-z]{2,3})$/;

export default function router(req, res) {
    const requestedPath = new URL(req.url,
          `http://${req.headers.host}`).pathname;

    const rD = reDetail.exec(requestedPath);
    const rS = reStatic.exec(requestedPath);
    if (rD)
        detail(rD[1], req, res);
    else if (rS)
        staticFile(rS[1], req, res);
    else if (requestedPath == '/')
        index(req, res);
    else
        error('Страница не найдена', 404, req, res);
}
