import {Router} from 'express';

import multer from 'multer';

import config from './multer';

const routes = new Router();

const multerMiddleware = multer(config);

routes.post('/tf', multerMiddleware.fields([{name: 'documentFile'}, {name: 'stopWordsFile'}]), async (req, res) => {
    return res.json(req);
});

export default routes;