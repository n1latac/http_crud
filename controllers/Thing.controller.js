const {Thing} = require('../models');

module.exports.createThing = async (req,res,next) => {
    const {body} = req;
    try{
        const createdThing = await Thing.create(body);
        if(createdThing){
            return res.status(201).send(createdThing);
        }else{
            return res.status(400).send();
        }
    }catch(error){
        next(error);
    }
}

module.exports.getAllThings = async (req, res, next) =>{
    try{
        const things = await Thing.findAllThings();
        return res.status(201).send(things);
    }catch(error){
        next(error);
    }
}