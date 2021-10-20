
const router = require('express').Router(); // import express router

const {userController} = require('../../controller/'); // import user controller 

const {userValidation} = require('../../validations') // import schemas validation

const { validatorMiddleWare } = require('../../middleware') // import validator middleware

router.get('/', userController.getUsers)  // invoke users List

.get('/:userId', userController.getUserById)  // invoke One user 

.post('/' ,validatorMiddleWare(userValidation.userSchema),userController.createUser) // create user

.put('/',validatorMiddleWare(userValidation.userEditSchema),userController.editUser) // edit user

.delete('/:userId',userController.deleteUser) // delete user

module.exports= router

