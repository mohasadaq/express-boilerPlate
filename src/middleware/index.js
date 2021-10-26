const morganMiddleWare = require('./morgan.middleware');

const validatorMiddleWare = require('./validator.middleware');

const authMiddleware = require('./auth.middleware');


module.exports={
    morganMiddleWare,
    validatorMiddleWare,
    authMiddleware
}
