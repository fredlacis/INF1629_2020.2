import {Router} from 'express';

import multer from 'multer';

import config from './multer';

const routes = new Router(); 

const multerMiddleware = multer(config);

routes.post('/tf', multerMiddleware.fields([{name: 'documentFile'}, {name: 'stopWordsFile'}]), async (req, res) => {
    let text = req.files.documentFile[0].buffer.toString().toLowerCase().replace(/[\W_]+/gm, " ");
    let stopWords = [];
    if(req.files.stopWordsFile) {
        stopWords = req.files.stopWordsFile[0].buffer.toString().toLowerCase().split(',');
    }
    let response = {};
    let wordList = text.trim().split(' ');
    let finalWordList = [];
    wordList.forEach(s => {
        if(stopWords.indexOf(s) == -1) {
            finalWordList.push(s);
        }
    });
    finalWordList.forEach(s => {
        if(response[s]) {
            response[s] += 1;
        } else {
            response[s] = 1;
        }
    });
    const sortable = Object.fromEntries(
        Object.entries(response).sort(([,a],[,b]) => b-a)
    );
    return res.json(sortable);
});

export default routes;