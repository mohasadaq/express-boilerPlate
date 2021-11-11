const router = require("express").Router(); // import express router
const { userController } = require("../../controller/"); // import user controller
const { userValidation } = require("../../validations"); // import schemas validation
const { validatorMiddleWare } = require("../../middleware"); // import validator middleware
const { authMiddleware, authrizationMiddleware } = require("../../middleware");

router
  .get("/", authMiddleware, authrizationMiddleware('viewAllUsers'), userController.getUsers) // invoke users List
  .get("/:userId", authMiddleware,authrizationMiddleware('viewUserById'), userController.getUserById) // invoke One user
  .post(
    "/",
    authMiddleware,
    authrizationMiddleware('createUser'),
    validatorMiddleWare(userValidation.userSchema),
    userController.createUser
  ) // create user
  .put(
    "/",
    authMiddleware,
    authrizationMiddleware('updateUser'),
    validatorMiddleWare(userValidation.userEditSchema),
    userController.editUser
  ) // edit user
  .delete("/:userId", authMiddleware,authrizationMiddleware('deleteUser'), userController.deleteUser); // delete user

module.exports = router;
