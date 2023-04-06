const express = require('express');
const ThingController = require('./controllers/Thing.controller');
const {validateThing} = require('./utils/validationThing');
const {basicErrors} = require('./error.Handler');
const app = express();
const bodyParser = express.json();
app.use(bodyParser);

app.post('/thing',validateThing, ThingController.createThing);
app.get('/thing');
app.get('/things', ThingController.getAllThings);
app.get('/thing/:id', ThingController.getOneThingById);
app.delete('/thing/:id', ThingController.deleteOneThingById);
app.put('/thing/:id', ThingController.updateOneThingById);

app.use(basicErrors);

module.exports = app;