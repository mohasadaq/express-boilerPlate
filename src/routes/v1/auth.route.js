const router = require("express").Router(); // import express router

const { authController } = require("../../controller/"); // import user controller
const { permissionController } = require("../../controller/"); // import permission controller
const { authValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");


router.post(
  "/",
  validator(authValidation.authSchema),
  authController.login
) // login

.get(
  "/permission",
  auth,
  authrization,
  permissionController.permissions
); // permission List

module.exports = router;
