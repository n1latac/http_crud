const {validateThing} = require('./utils/validationThing');

module.exports.basicErrors = (err, req, res, next) => {
    if(err instanceof validateThing){
        return res.status(400).send('smth wrong with db');
    }
}