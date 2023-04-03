const {Client} = require('pg');
const fs = require('fs');
const path = require('path');
const config = require('../configs/db.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const client = new Client(dbConfig);

const currentFile = fs.readdirSync(__filename);
const db = {}

fs.readdirSync(__dirname).filter(fName => /.js$/.test(fName) && fName !== currentFile)
.forEach(fName => { 
    const absPathToFile = path.resolve(__dirname,fName);
    const Model = require(absPathToFile);
    Model.client = client;
    db[Model.name] = Model;
})



client.connect();

module.exports = {  //только development(не test или production пока что)
    client
}