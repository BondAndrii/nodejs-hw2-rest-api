const { HttpError } = require("../helpers");

const validateBody = schema => {

    const func = (req, _, next) => {
        const { error } = schema.validate(req.body);
        
        if (error) {
            next(HttpError(400, "missing required name field"));
        }
        
        next();
    }

    return func;
}

module.exports = validateBody;