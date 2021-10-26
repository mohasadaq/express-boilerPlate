
const router = require('express').Router(); // import express router

const {userController} = require('../../controller/'); // import user controller 

const {userValidation} = require('../../validations') // import schemas validation

const { validatorMiddleWare } = require('../../middleware') // import validator middleware

const {authMiddleware}  = require('../../middleware')

router.get('/', authMiddleware , userController.getUsers)  // invoke users List

.get('/:userId',authMiddleware, userController.getUserById)  // invoke One user 

.post('/' , authMiddleware, validatorMiddleWare(userValidation.userSchema),userController.createUser) // create user

.put('/',authMiddleware, validatorMiddleWare(userValidation.userEditSchema),userController.editUser) // edit user

.delete('/:userId',userController.deleteUser) // delete user

module.exports= router

