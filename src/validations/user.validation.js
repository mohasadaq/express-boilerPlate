const joi = require("joi"); // import joi

// user schema
const userSchema = joi.object({
  fullName: joi.string().required().max(10),
  email: joi.string().email().required(),
  password: joi.string().alphanum().required().max(10).min(8),
});

// user edit schema
const userEditSchema = joi.object({
  id: joi.number().required(),
  fullName: joi.string().required().max(10),
  password: joi.string().alphanum().optional().max(10).min(8)
});

module.exports = { userSchema, userEditSchema };
