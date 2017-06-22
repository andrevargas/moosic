'use strict';

const Express = require('express');
const Realm = require('realm');
const bodyParser = require('body-parser');

const schemas = require('./schemas');
const { loadStartupData } = require('./bootstrap');

const app = Express();
const realm = new Realm({ schema: schemas });

let user = null;
app.use(bodyParser.json());
loadStartupData(realm);

app.post('/user', (req, res) => {
    user = realm.write(() => realm.create('User', req.body));
    res.send().status(201);
});

app.put('/user', (req, res) => {
    user = realm.objects('User')
        .find(item => item.id === req.body.userId);
    res.send().status(200);
});

app.get('/album', (req, res) => {
    const albums = realm.objects('Album').map(item => item);
    res.contentType('json')
        .send(JSON.stringify(albums))
        .status(200);
});

app.listen(8080, () => console.log('server running'));