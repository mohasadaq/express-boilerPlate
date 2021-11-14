const router = require("express").Router(); // import express router
const { userController } = require("../../controller/"); // import user controller
const { userValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");

router
  .get("/", auth, authrization('viewAllUsers'), userController.getUsers) // invoke users List
  .get("/:userId", auth,authrization('viewUserById'), userController.getUserById) // invoke One user
  .post(
    "/",
    auth,
    authrization('createUser'),
    validator(userValidation.userSchema),
    userController.createUser
  ) // create user
  .put(
    "/",
    auth,
    authrization('updateUser'),
    validator(userValidation.userEditSchema),
    userController.editUser
  ) // edit user
  .delete("/:userId", auth,authrization('deleteUser'), userController.deleteUser); // delete user

module.exports = router;
