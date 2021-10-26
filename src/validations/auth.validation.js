const joi = require('joi'); // import joi

// auth edit schema
const authSchema = joi.object({
    "email" : joi.string().email().required(),
    "password" : joi.string().alphanum().optional().max(10).min(8)
})

module.exports = {
    authSchema
}