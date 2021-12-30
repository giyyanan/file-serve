const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const req = require('express/lib/request');
const res = require('express/lib/response');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf/;
        if (filetypes.test(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('File type should be either jpg or png or pdf'))
        }
    }
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('./index')
});

app.post('/upload', upload.single('file'), function (req, res, next) {

    if (!req.file) {
        const error = new Error('failure')
        error.httpStatusCode = 400
        return next(error)
    }
    console.log(req.file, req.body)
    res.send("success");
})

app.post('/uploadMany', upload.array('files', 10), function (req, res, next) {
    if (!req.files) {
        const error = new Error('failure')
        error.httpStatusCode = 400
        return next(error)
    }
    console.log(req.files)
    res.send("success")
})

app.get('/display', (req, res) => {
    const filetypes = /jpeg|jpg|png|pdf/;
    if(req.query.name){
        if(filetypes.test(req.query.name.split('.')[1])){
            try {
                res.sendFile(path.join(__dirname, '/uploads/'+req.query.name));
            } catch (error) {
                res.write("error occured while fetching file")
            }
        } else{
            res.status(400).send('File type extension not supported. File type should be either jpg or png or pdf')
        }
    }else{
        res.status(400).send('enter a file name in URL (/diplay?name={filename.extension}) to fetch from server')
    }
    
});



app.listen(8080);