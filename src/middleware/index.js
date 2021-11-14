const morgan = require("./morgan.middleware");

const validator = require("./validator.middleware");

const auth = require("./auth.middleware").auth;
const authrization = require("./auth.middleware").authrization;

module.exports = { morgan, validator, auth, authrization };
