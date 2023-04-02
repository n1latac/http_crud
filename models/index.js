const {Client} = require('pg');
const config = require('../configs/db.json');


const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const client = new Client(dbConfig);

client.connect();

module.exports = {  //только development(не test или production пока что)
    client
}