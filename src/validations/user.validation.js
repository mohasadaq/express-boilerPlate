const joi = require('joi'); // import joi

// user schema 
const userSchema = joi.object({
    "id": joi.number().min(1).required(),
    "firstName" : joi.string().required().max(10),
    "lastName" : joi.string().optional().max(10),
    "age" : joi.number().required().max(120).min(12),
    "email" : joi.string().email().required(),
    "password" : joi.string().alphanum().required().max(10).min(8),
})

// user edit schema
const userEditSchema = joi.object({
    "id" : joi.number().required(),
    "firstName" : joi.string().required().max(10),
    "lastName" : joi.string().optional().max(10),
    "password" : joi.string().alphanum().optional().max(10).min(8)
})

module.exports = {
    userSchema,
    userEditSchema
}