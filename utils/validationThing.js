const yup = require('yup');

const ThingSchema = yup.object().shape({
    body: yup.string().required().min(3).max(100)
});


module.exports.validateThing = async (req,res,next) => {
    const {body} = req;
    try{
        const validated = await ThingSchema.validate(body);
        if(validated){
            return next()
        } 
    }catch(err){
        return next(err);
    }
}