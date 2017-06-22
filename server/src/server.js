'use strict';

const Express = require('express');
const Realm = require('realm');
const bodyParser = require('body-parser');

const schemas = require('./schemas');
const RBC = require('./rbc');
const { loadStartupData } = require('./bootstrap');

const app = Express();
const realm = new Realm({ schema: schemas });

let user = null;
app.use(bodyParser.json());
loadStartupData(realm);

app.post('/user', (req, res) => {
    realm.write(() => {
        user = realm.create('User', req.body)
    });
    res.send().status(201);
});

app.put('/user', (req, res) => {
    user = realm.objects('User')
        .find(item => item.id === req.body.userId);
    res.send().status(200);
});

app.get('/album', (req, res) => {
    const { offset = 0, limit = 10 } = req.query;
    const albums = realm.objects('Album')
        .map(item => item)
        .splice(offset, limit);
    res.contentType('json')
        .send(JSON.stringify(albums))
        .status(200);
});

app.get('/recommended', (req, res) => {
    const albums = user.clickedAlbums;
    if (albums.length < 0) {
        return res.send(JSON.stringify([])).status(200);
    }
    albums.forEach(item => {
        const database = realm.objects('Album')
            .map(item => ({
                name: item.name,
                artist: item.artist,
                playCount: item.playCount
            }));
        const mappedAlbum = {
            name: item.name,
            artist: item.artist,
            playCount: item.playCount
        };
        RBC.testCase(database, mappedAlbum);
    });
});

app.listen(8080, () => console.log('server running'));