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

module.exports.getOneThingById = async (req, res, next) => {
    const {params: {id}} = req;
    try{
        const oneThing = await Thing.getOneThingById(id);
        if(oneThing.length === 0){
            return res.status(404).send('cant search');
        }
        return res.status(201).send(oneThing);
    }catch(error){
        return error
    }
}
module.exports.deleteOneThingById = async (req, res, next) => {
    const {params: {id}} = req;
    try{
        const deletedThing = await Thing.updateByPk(id);
        return res.status(201).send(deletedThing);
    }catch(error){
        console.log(error);
        return res.status(404).send(error);
    }
}

module.exports.updateOneThingById = async (req, res, next) => {
    const {params: {id}, body} = req;
    //console.log({id, upupdateValuesda});
    try{
        const updatedThing = await Thing.updateByPk({id, updateValues: body});
        return res.status(201).send(updatedThing);
    }catch(error){
        return res.status(404).send(error);
    }
}
