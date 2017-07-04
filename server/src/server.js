const express = require('express');
const neo4j = require('neo4j');
const bodyParser = require('body-parser');

const app = express();
const db = new neo4j.GraphDatabase({
    url: 'http://moosic_db_neo4j:7474',
    auth: { username: 'neo4j', password: '123321' }
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('hello world!'));

app.listen(process.env.NODE_PORT, () => console.log('server running'));