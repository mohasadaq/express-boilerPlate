const router = require("express").Router(); // import express router

const { authController } = require("../../controller/"); // import user controller
const { permissionController } = require("../../controller/"); // import permission controller
const { authValidation } = require("../../validations"); // import schemas validation
const { validatorMiddleWare } = require("../../middleware"); // import validator middleware
const { authMiddleware, authrizationMiddleware } = require("../../middleware");


router.post(
  "/",
  validatorMiddleWare(authValidation.authSchema),
  authController.login
) // login

.get(
  "/permission",
  authMiddleware,
  authrizationMiddleware,
  permissionController.permissions
); // permission List

module.exports = router;
