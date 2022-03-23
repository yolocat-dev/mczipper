const CONFIG = require('./config.json')

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        page: 'About'
    });
});

app.listen(CONFIG.web.port);
console.log('Server listening on port ' + CONFIG.web.port);