console.clear();
const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    baseRoot
} = require('../constant');
const checkFolder = require('../functions/checkFolder');
const generateName = require('../functions/generateNameImage');
// const  upload = multer({
//     dest: 'uploads/'
// });

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        await checkFolder(baseRoot + '/uploads');
        cb(null, baseRoot + '/uploads');
    },

    // By default, multer removes file extensions so let's add them back
    filename:async function (req, file, cb) {
        cb(null,await generateName(file));
    }
});
const upload = multer({
    storage
});
const app = express();
app.use(express.static(__dirname + '/public'));
app.post('/profile', upload.single('avatar'), (req, res) => {
    console.log(multer.diskStorage.filename())
    res.json({
        "message": "ok"
    })
});

module.exports = app    ;