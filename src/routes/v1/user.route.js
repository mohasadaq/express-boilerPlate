
const router = require('express').Router(); // import express router

const userControler = require('../../controller/user.controler'); // import user controller 

const schemas = require('../../validations/validation')           // import schemas validation

const validateSchema = require('../../middleware/validator.middleware') // import vlidator middleware

router.get('/', userControler.getUsers)  // invoke users List

.get('/:userId', userControler.getUserById)  // invoke One user 

.post('/' ,validateSchema(schemas.userSchema),userControler.createUser) // create user

.put('/',validateSchema(schemas.userEditSchema),userControler.editUser) // edit user

.delete('/:userId',userControler.deleteUser) // delete user

module.exports= router

