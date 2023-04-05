const express = require('express');
const ThingController = require('./controllers/Thing.controller');
const app = express();
const bodyParser = express.json();

app.post('/thing', bodyParser, ThingController.createThing);
app.get('/thing');
app.get('/things', ThingController.getAllThings);
app.get('/thing/:id', ThingController.getOneThingById);
app.delete('/thing/:id', ThingController.deleteOneThingById);
app.put('/thing/:id', bodyParser, ThingController.updateOneThingById);

module.exports = app;