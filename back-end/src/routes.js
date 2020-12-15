import {Router} from 'express';

import multer from 'multer';

import config from './multer';

const routes = new Router(); 

const multerMiddleware = multer(config);

routes.post('/tf', multerMiddleware.fields([{name: 'documentFile'}, {name: 'stopWordsFile'}]), async (req, res) => {
    // pega o documento, lê e retira qualquer caractere não-alfanumérico
    let text = req.files.documentFile[0].buffer.toString().toLowerCase().replace(/[\W_]+/gm, " ");
    let stopWords = [];
    // verifica a existência do arquivo de stop-words
    if(req.files.stopWordsFile) {
        // realiza o mesmo procedimento feito com o documento no arquivo de stop-words
        stopWords = req.files.stopWordsFile[0].buffer.toString().toLowerCase().split(',');
    }
    let response = {};
    // cria a lista de termos com base no documento dado
    let wordList = text.trim().split(' ');
    let finalWordList = [];
    // retira da lista de termos as stop-words
    wordList.forEach(s => {
        if(stopWords.indexOf(s) == -1) {
            finalWordList.push(s);
        }
    });
    // realiza a contagem de frequência de termos
    finalWordList.forEach(s => {
        if(response[s]) {
            response[s] += 1;
        } else {
            response[s] = 1;
        }
    });
    // ordena o mapa com base nos valores dos termos, ou seja, sua frequência
    const sortable = Object.fromEntries(
        Object.entries(response).sort(([,a],[,b]) => b-a)
    );
    return res.json(sortable);
});

export default routes;