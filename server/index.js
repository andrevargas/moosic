'use strict';

const Express = require('express');
const Realm = require('realm');
const schemas = require('./schemas');

const app = Express();
const realm = new Realm({ schema: schemas });

app.get('/', (req, res) => res.send('hello world'));

app.listen(8080, () => console.log('server running'));