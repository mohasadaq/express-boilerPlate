const morganMiddleWare = require("./morgan.middleware");

const validatorMiddleWare = require("./validator.middleware");

const authMiddleware = require("./auth.middleware").auth;
const authrizationMiddleware = require("./auth.middleware").authrization;

module.exports = { morganMiddleWare, validatorMiddleWare, authMiddleware,authrizationMiddleware };
