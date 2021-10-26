
const router = require('express').Router(); // import express router

const {authController} = require('../../controller/'); // import user controller 

const {authValidation} = require('../../validations') // import schemas validation

const { validatorMiddleWare } = require('../../middleware') // import validator middleware


router.post('/' ,validatorMiddleWare(authValidation.authSchema),authController.login) // create user


module.exports= router

